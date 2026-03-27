#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { Client } from 'pg';

const sqlPath = process.argv[2] || path.join(process.cwd(), 'migrate.sql');

async function main() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.error('DATABASE_URL not set. Set the DATABASE_URL env var to your Postgres connection string.');
    process.exit(1);
  }

  // If migrate.sql doesn't exist, try to generate it
  if (!fs.existsSync(sqlPath)) {
    console.log('migrate.sql not found — generating with migrate script...');
    const gen = spawnSync('node', ['scripts/migrate-db-to-postgres.mjs', sqlPath], { stdio: 'inherit' });
    if (gen.status !== 0) {
      console.error('Failed to generate migrate.sql');
      process.exit(2);
    }
  }

  const sql = fs.readFileSync(sqlPath, 'utf8');

  const client = new Client({ connectionString: databaseUrl, ssl: { rejectUnauthorized: false } });
  try {
    console.log('Connecting to database...');
    await client.connect();
    console.log('Applying migration SQL...');
    // Split statements and run sequentially to avoid large single-query issues
    const statements = sql.split(/;\s*\n/).map(s => s.trim()).filter(Boolean);
    for (const stmt of statements) {
      await client.query(stmt);
    }

    console.log('Migration applied successfully.');
  } catch (err) {
    console.error('Migration failed:', err && err.message ? err.message : err);
    process.exitCode = 3;
  } finally {
    await client.end();
  }
}

main();

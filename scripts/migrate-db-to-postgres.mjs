#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'db.json');
const outPath = process.argv[2] || path.join(process.cwd(), 'migrate.sql');

function escapeSql(val) {
  if (val === null || val === undefined) return 'NULL';
  return `'${String(val).replace(/'/g, "''")}'`;
}

function toNumeric(priceStr) {
  if (priceStr === null || priceStr === undefined) return 'NULL';
  const normalized = String(priceStr).replace(',', '.').replace(/[^0-9.\-]/g, '');
  if (normalized === '') return 'NULL';
  return Number.isFinite(Number(normalized)) ? normalized : 'NULL';
}

if (!fs.existsSync(dbPath)) {
  console.error('db.json not found at', dbPath);
  process.exit(1);
}

const raw = fs.readFileSync(dbPath, 'utf8');
const parsed = JSON.parse(raw);
const rows = parsed.transactions || [];

const out = [];
out.push('-- SQL generated from db.json');
out.push('BEGIN;');
out.push('CREATE TABLE IF NOT EXISTS transactions (');
out.push('  id integer PRIMARY KEY,');
out.push('  description text,');
out.push('  category text,');
out.push('  "text" text,');
out.push('  price numeric(10,2),');
out.push('  image text');
out.push(');');
out.push('TRUNCATE TABLE transactions RESTART IDENTITY;');

for (const r of rows) {
  const id = Number.isInteger(r.id) ? r.id : 'DEFAULT';
  const description = escapeSql(r.description);
  const category = escapeSql(r.category);
  const textField = escapeSql(r.text);
  const price = toNumeric(r.price);
  const image = escapeSql(r.image);
  const values = [id === 'DEFAULT' ? 'DEFAULT' : id, description, category, textField, price === 'NULL' ? 'NULL' : price, image].join(', ');
  out.push(`INSERT INTO transactions (id, description, category, "text", price, image) VALUES (${values});`);
}

out.push('COMMIT;');

fs.writeFileSync(outPath, out.join('\n') + '\n', 'utf8');
console.log('Wrote SQL to', outPath);

import { readFile } from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  try {
    const dbPath = path.join(process.cwd(), 'db.json');
    const content = await readFile(dbPath, 'utf8');
    const db = JSON.parse(content || '{}');
    const transactions = db.transactions ?? [];

    // JSON response
    res.setHeader('Content-Type', 'application/json');
    // Allow CORS (helpful if API is called cross-origin during testing)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
      res.statusCode = 204;
      res.end();
      return;
    }

    if (typeof res.json === 'function') {
      return res.status(200).json(transactions);
    }

    res.statusCode = 200;
    res.end(JSON.stringify(transactions));
  } catch (err) {
    console.error('Error reading db.json', err);
    res.statusCode = 500;
    res.end(JSON.stringify({ error: 'Failed to read db.json' }));
  }
}

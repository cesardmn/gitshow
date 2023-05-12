import { Pool } from 'pg';

const isProduction = process.env.NODE_ENV === 'production';

const connectionString = isProduction
  ? process.env.DATABASE_URL
  : process.env.local.DATABASE_URL

const pool = new Pool({
  connectionString,
  ssl: isProduction ? { rejectUnauthorized: false } : false
});

export function query(text, params, callback) {
  return pool.query(text, params, callback);
}

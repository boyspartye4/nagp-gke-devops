// db.js
// ------------------------------
// Handles PostgreSQL connection pooling and queries
// Uses environment variables from ConfigMap/Secret
// ------------------------------

const { Pool } = require("pg");

// Create a connection pool
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  max: 10, // max number of connections
  idleTimeoutMillis: 30000, // idle timeout
});

/**
 * Fetch all records from 'items' table
 * @returns
 */
async function getAllRecords() {
  const query = "SELECT * FROM items";
  const { rows } = await pool.query(query);
  return rows;
}

// Export function(s)
module.exports = {
  getAllRecords,
};

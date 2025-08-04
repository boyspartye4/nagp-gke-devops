// index.js
// ------------------------------
// Entry point for Node.js Express API
// Fetches data from PostgreSQL via db.js
// ------------------------------

require("dotenv").config(); // Load env variables locally
const express = require("express");
const db = require("./db");

const app = express();

// Basic health check endpoint
app.get("/api/health", (req, res) => {
  res.send("API is healthy 🚀");
});

// GET /api/records - fetch all records from DB
app.get("/api/records", async (req, res) => {
  try {
    const records = await db.getAllRecords();
    res.json(records);
  } catch (error) {
    console.error("Error fetching records:", error);
    res.status(500).send("Internal Server Error");
  }
});

// add an item (via GET + query param)
app.get("/api/add", async (req, res) => {
  const { item } = req.query;
  if (!item) {
    return res.status(400).json({ error: "Missing \"item\" query parameter" });
  }

  try {
    await db.addRecord(item);
    res.json({ message: `Item "${item}" added successfully` });
  } catch (error) {
    console.error("Error adding item:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ API server running on port ${PORT}`);
});

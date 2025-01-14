// backend/index.js
const express = require('express');
const cors = require('cors');
const nano = require('nano');
const app = express();
const port = 5000;

// CouchDB connection setup (replace with your CouchDB URL)
const dbUrl = 'http://admin:admin@127.0.0.1:5984';  // or your remote CouchDB URL
const couch = nano(dbUrl);
const dbName = 'reviews';  // Replace with your actual DB name
let db;

couch.db.get(dbName, (err) => {
  if (err) {
    couch.db.create(dbName, (createErr) => {
      if (createErr) {
        console.error('Failed to create database:', createErr);
        process.exit(1);
      }
      db = couch.use(dbName);
    });
  } else {
    db = couch.use(dbName);
  }
});

app.use(cors());
app.use(express.json());

// Endpoint to store a new item
app.post('/addItem', async (req, res) => {
  try {
    const { name, description } = req.body;
    const newItem = { name, description, dateAdded: new Date() };
    const response = await db.insert(newItem);
    res.json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint to get all items from the database
app.get('/getItems', async (req, res) => {
  try {
    const { rows } = await db.view('designDoc', 'allItems');
    res.json(rows.map(row => row.value));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

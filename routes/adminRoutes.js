const express = require('express');
const db = require('../db');
const router = express.Router();

// Admin routes
router.post('/admin', (req, res) => {
  const { username, password } = req.body;

  // Input validation
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  // Insert the admin into the database (without password hashing)
  db.query('INSERT INTO admin (username, password) VALUES ($1, $2)', [username, password], (error) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    res.status(201).json({ message: 'Admin created successfully' });
  });
});

router.get('/admin/:id', (req, res) => {
  const adminId = req.params.id;

  // Retrieve admin by ID from the database
  db.query('SELECT * FROM admin WHERE id = $1', [adminId], (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Admin not found' });
    }

    res.status(200).json(result.rows[0]);
  });
});

module.exports = router;
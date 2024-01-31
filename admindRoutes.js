const express = require('express');
const db = require('../db');
const router = express.Router();

// Admin Routes
router.post('/admin', (req, res) => {
  // Implementation for creating an admin
  db.query('INSERT INTO admin (username, password) VALUES ($1, $2)', [req.body.username, req.body.password], (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(201).json({ message: 'Admin created successfully' });
    }
  });
});

router.get('/admin/:id', (req, res) => {
  // Implementation for getting admin by ID
  const adminId = req.params.id;
  db.query('SELECT * FROM admin WHERE id = $1', [adminId], (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json(result.rows[0]);
    }
  });
});
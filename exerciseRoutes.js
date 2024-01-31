const express = require('express');
const db = require('../db');
const router = express.Router();

// Exercise Log Routes
router.post('/exercises', (req, res) => {
  // Implementation for logging an exercise
  db.query('INSERT INTO exercise_log (user_id, exercise_name, duration_minutes, date) VALUES ($1, $2, $3, $4)', [req.body.user_id, req.body.exercise_name, req.body.duration_minutes, req.body.date], (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(201).json({ message: 'Exercise logged successfully' });
    }
  });
});

router.get('/exercises/:id', (req, res) => {
  // Implementation for getting exercise by ID
  const exerciseId = req.params.id;
  db.query('SELECT * FROM exercise_log WHERE id = $1', [exerciseId], (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json(result.rows[0]);
    }
  });
});

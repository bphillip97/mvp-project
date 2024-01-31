const express = require('express');
const db = require('../db');
const router = express.Router();

// Exercise Log Routes
router.post('/exercises', (req, res) => {
  const { user_id, exercise_name, duration_minutes, date } = req.body;

  // Input validation
  if (!user_id || !exercise_name || !duration_minutes || !date) {
    return res.status(400).json({ error: 'Incomplete exercise log data' });
  }

  // Insert the exercise log into the database
  db.query('INSERT INTO exercise_log (user_id, exercise_name, duration_minutes, date) VALUES ($1, $2, $3, $4)', [user_id, exercise_name, duration_minutes, date], (error) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(201).json({ message: 'Exercise logged successfully' });
    }
  });
});

router.get('/exercises/:id', (req, res) => {
  const exerciseId = req.params.id;

  // Retrieve exercise log by ID from the database
  db.query('SELECT * FROM exercise_log WHERE id = $1', [exerciseId], (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Exercise log not found' });
      }
      res.status(200).json(result.rows[0]);
    }
  });
});

module.exports = router;

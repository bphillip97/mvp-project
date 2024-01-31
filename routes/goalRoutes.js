const express = require('express');
const db = require('../db');
const router = express.Router();

// Weight Goals Routes
router.post('/goals', (req, res) => {
  const { user_id, goal_weight } = req.body;

  // Input validation
  if (!user_id || !goal_weight) {
    return res.status(400).json({ error: 'Incomplete weight goal data' });
  }

  // Insert the weight goal into the database
  db.query('INSERT INTO weight_goals (user_id, goal_weight) VALUES ($1, $2)', [user_id, goal_weight], (error) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(201).json({ message: 'Weight goal created successfully' });
    }
  });
});

router.get('/goals/:id', (req, res) => {
  const goalId = req.params.id;

  // Retrieve weight goal by ID from the database
  db.query('SELECT * FROM weight_goals WHERE id = $1', [goalId], (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Weight goal not found' });
      }
      res.status(200).json(result.rows[0]);
    }
  });
});

module.exports = router;
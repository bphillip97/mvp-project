let express = require('express');
let db = require('../db');
let router = express.Router();

// Weight Goals Routes
router.post('/goals', (req, res) => {
  // Implementation for creating a weight goal
  db.query('INSERT INTO weight_goals (user_id, goal_weight) VALUES ($1, $2)', [req.body.user_id, req.body.goal_weight], (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(201).json({ message: 'Weight goal created successfully' });
    }
  });
});

router.get('/goals/:id', (req, res) => {
  // Implementation for getting weight goal by ID
  let goalId = req.params.id;
  db.query('SELECT * FROM weight_goals WHERE id = $1', [goalId], (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json(result.rows[0]);
    }
  });
});

module.exports = router;
const express = require('express');
const { Pool } = require('pg');
const adminRoutes = require('./routes/adminRoutes');
const goalRoutes = require('./routes/goalRoutes');
const exerciseRoutes = require('./routes/exerciseRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/admin', adminRoutes);
app.use('/goals', goalRoutes);
app.use('/exercises', exerciseRoutes);

// Default route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the root URL!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
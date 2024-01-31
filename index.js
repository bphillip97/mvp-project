let express = require('express');
let { Pool } = require('pg');
let adminRoutes = require('./routes/adminRoutes');
let goalRoutes = require('./routes/goalRoutes');
let exerciseRoutes = require('./routes/exerciseRoutes');

let app = express();
let PORT = process.env.PORT || 3000;
app.use(express.json());


app.use('/admin', adminRoutes);
app.use('/goals', goalRoutes);
app.use('/exercises', exerciseRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
import express from 'express';
import adminRoutes from './routes/adminRoutes';
import goalRoutes from './routes/goalRoutes';
import exerciseRoutes from './routes/exerciseRoutes';

const app = express();
const PORT = 3000;

// Use express.json() instead of body-parser
app.use(express.json());

app.use('/admin', adminRoutes);
app.use('/goals', goalRoutes);
app.use('/exercises', exerciseRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
// Route Modules
import characterRoutes from './routes/characters.mjs';
import songRoutes from './routes/songs.mjs';
import locationRoutes from './routes/locations.mjs';
import authRoutes from './routes/auth.mjs'; // Import authentication routes

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.ATLAS_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// API Routes - Mount the route handlers
app.use('/api/characters', characterRoutes);
app.use('/api/songs', songRoutes);
app.use('/api/locations', locationRoutes);
app.use('/api/auth', authRoutes); // Use authentication routes

// Base Route
app.get('/', (req, res) => {
  res.send('Welcome to the Sound of Music API!');
});

// Global error handling
app.use((err, _req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something\'s wrong somewhere...', errors: err.errors });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
import express from 'express';
import Location from '../models/location.mjs'; // location schema
// Controller functions
import {
  getAllLocations,
  getLocationById,
  createLocation,
  updateLocation,
  deleteLocation
} from '../controllers/locations.controller.mjs';
import authenticateToken from '../middleware/auth.middleware.mjs'; // Import authentication middleware

const router = express.Router();

// Seed Route
router.get('/seed', async (req, res) => {
    try {
        await Location.create([
            { name: 'Nonnberg Abbey', city: 'Salzburg', country: 'Austria', description: 'Maria\'s convent' },
            { name: 'Von Trapp Villa', city: 'Salzburg', country: 'Austria', description: 'The family home' },
            { name: 'Mirabell Gardens', city: 'Salzburg', country: 'Austria', description: 'Iconic filming location' },
            { name: 'Salzburg Residenz Fountain', city: 'Salzburg', country: 'Austria', description: 'Featured in Do-Re-Mi' }
        ])
        res.redirect('/api/locations');
    } catch (error) {
        console.error(error);
    }
});

// Define '/api/locations' endpoints and link them to controller functions
router.get('/', getAllLocations);
router.get('/:id', getLocationById);
// Use auth middleware to protect routes that manipulate data
//router.post('/', authenticateToken, createLocation);
router.put('/:id', authenticateToken, updateLocation); // PUT instead of PATCH for full updates
//router.delete('/:id', authenticateToken deleteLocation);

export default router;
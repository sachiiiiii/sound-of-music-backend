import express from 'express';
import Location from '../models/location.mjs';
// Controller functions
import {
  getAllLocations,
  getLocationById,
  createLocation,
  updateLocation,
  deleteLocation
} from '../controllers/locations.controller.mjs';

const router = express.Router();

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
//router.post('/', createLocation);
router.put('/:id', updateLocation); // PUT instead of PATCH for full updates
//router.delete('/:id', deleteLocation);

export default router;
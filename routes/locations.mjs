import express from 'express';
// Controller functions
import {
  getAllLocations,
  getLocationById,
  createLocation,
  updateLocation,
  deleteLocation
} from '../controllers/locations.controller.js';

const router = express.Router();

// Define '/api/locations' endpoints and link them to controller functions
router.get('/', getAllLocations);
router.get('/:id', getLocationById);
//router.post('/', createLocation);
router.put('/:id', updateLocation); // PUT instead PATCH for full updates
//router.delete('/:id', deleteLocation);

export default router;
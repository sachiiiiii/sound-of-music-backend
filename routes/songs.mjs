import express from 'express';
// Controller functions
import {
  getAllSongs,
  getSongById,
  createSong,
  updateSong,
  deleteSong
} from '../controllers/songs.controller.js';

const router = express.Router();

// Define '/api/songs' endpoints and link them to controller functions
router.get('/', getAllSongs);
router.get('/:id', getSongById);
router.post('/', createSong);
router.put('/:id', updateSong); // PUT instead PATCH for full updates
router.delete('/:id', deleteSong);

export default router;
import express from 'express';
// Controller functions
import {
  getAllCharacters,
  getCharacterById,
  createCharacter,
  updateCharacter,
  deleteCharacter
} from '../controllers/characters.controller.js';

const router = express.Router();

// Define '/api/characters' endpoints and link them to controller functions
router.get('/', getAllCharacters);
router.get('/:id', getCharacterById);
router.post('/', createCharacter);
router.put('/:id', updateCharacter); // PUT instead PATCH for full updates
router.delete('/:id', deleteCharacter);

export default router;
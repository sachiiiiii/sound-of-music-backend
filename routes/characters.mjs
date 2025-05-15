import express from 'express';
import Character from '../models/character.mjs'; // character schema
// Controller functions
import {
    getAllCharacters,
    getCharacterById,
    createCharacter,
    updateCharacter,
    deleteCharacter
} from '../controllers/characters.controller.mjs';

const router = express.Router();

// Seed Route
router.get('/seed', async (req, res) => {
    try {
        await
            Character.create([
                { name: 'Maria', role: 'Governess', family: 'Non-Von Trapp' },
                { name: 'Captain Georg von Trapp', role: 'Father', family: 'Von Trapp' },
                { name: 'Liesl von Trapp', role: 'Eldest Daughter', family: 'Von Trapp' },
                { name: 'Friedrich von Trapp', role: 'Son', family: 'Von Trapp' },
                { name: 'Louisa von Trapp', role: 'Daughter', family: 'Von Trapp' },
                { name: 'Kurt von Trapp', role: 'Son', family: 'Von Trapp' },
                { name: 'Brigitta von Trapp', role: 'Daughter', family: 'Von Trapp' },
                { name: 'Marta von Trapp', role: 'Daughter', family: 'Von Trapp' },
                { name: 'Gretl von Trapp', role: 'Youngest Daughter', family: 'Von Trapp' },
                { name: 'Baroness Elsa Schraeder', role: 'Captain\'s Fiancee', family: 'Non-Von Trapp' },
                { name: 'Max Detweiler', role: 'Friend/Promoter', family: 'Non-Von Trapp' },
                { name: 'Mother Abbess', role: 'Head of Abbey', family: 'Non-Von Trapp' }
            ])
        res.redirect('/api/characters');
    } catch (error) {
        console.error(error);
    }
});

// Define '/api/characters' endpoints and link them to controller functions
router.get('/', getAllCharacters);
router.get('/:id', getCharacterById);
router.post('/', createCharacter);
router.put('/:id', updateCharacter); // PUT instead PATCH for full updates
router.delete('/:id', deleteCharacter);

export default router;
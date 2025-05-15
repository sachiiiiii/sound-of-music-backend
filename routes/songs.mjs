import express from 'express';
import Song from '../models/song.mjs';
// Controller functions
import {
    getAllSongs,
    getSongById,
    createSong,
    updateSong,
    deleteSong
} from '../controllers/songs.controller.mjs';
import authenticateToken from '../middleware/auth.middleware.mjs'; // Import authentication middleware

const router = express.Router();

router.get('/seed', async (req, res) => {
    try {
        await Song.create([
            { title: 'Do-Re-Mi', artist: 'Maria & Children', duration: '4:00', mood: 'Uplifting', year: 1965 },
            { title: 'My Favorite Things', artist: 'Maria', duration: '2:30', mood: 'Comforting', year: 1965 },
            { title: 'Edelweiss', artist: 'Captain von Trapp', duration: '2:00', mood: 'Patriotic', year: 1965 },
            { title: 'Sixteen Going on Seventeen', artist: 'Liesl & Rolf', duration: '3:20', mood: 'Romantic', year: 1965 },
            { title: 'The Sound of Music', artist: 'Maria', duration: '2:10', mood: 'Inspirational', year: 1965 },
            { title: 'So Long, Farewell', artist: 'Children', duration: '2:25', mood: 'Playful', year: 1965 }
        ])
        res.redirect('/api/songs');
    } catch (error) {
        console.error(error);
    }
});

// Define '/api/songs' endpoints and link them to controller functions
router.get('/', getAllSongs);
router.get('/:id', getSongById);
// Use auth middleware to protect routes that manipulate data
router.post('/', authenticateToken, createSong);
router.put('/:id', authenticateToken, updateSong); // PUT instead PATCH for full updates
router.delete('/:id', authenticateToken, deleteSong);

export default router;
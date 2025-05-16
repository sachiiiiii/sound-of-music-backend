import Song from '../models/song.mjs';

/**
 * Logic for '/api/songs' API endpoints
 */

// GET all songs
export const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving songs - Server Error' });
  }
};

// GET song by ID
export const getSongById = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).json({ message: 'Song not found' });
    }
    res.json(song);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving song - Server Error' });
  }
};

// _Create a new song
export const createSong = async (req, res) => {
  try {
    const newSong = new Song(req.body);
    const savedSong = await newSong.save();
    res.status(201).json(savedSong);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating song - Server Error' });
  }
};

// _Update a song
export const updateSong = async (req, res) => {
  try {
    const updatedSong = await Song.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedSong) {
      return res.status(404).json({ message: 'Song not found' });
    }
    res.json(updatedSong);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating song - Server Error' });
  }
};

// DELETE a song
export const deleteSong = async (req, res) => {
  try {
    const deletedSong = await Song.findByIdAndDelete(req.params.id);
    if (!deletedSong) {
      return res.status(404).json({ message: 'Song not found' });
    }
    res.status(204).send(); // 204 No Content for successful deletion
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting song - Server Error' });
  }
};
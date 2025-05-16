import Character from '../models/character.mjs';

/**
 * Logic for '/api/characters' API endpoints
 */

// GET all characters
export const getAllCharacters = async (req, res) => {
  try {
    const characters = await Character.find();
    res.json(characters);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving characters - Server Error' });
  }
};

// GET character by ID
export const getCharacterById = async (req, res) => {
  try {
    const character = await Character.findById(req.params.id);
    if (!character) {
      return res.status(404).json({ message: 'Character not found' });
    }
    res.json(character);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving character - Server Error' });
  }
};

// _Create a new character
export const createCharacter = async (req, res) => {
  try {
    const newCharacter = new Character(req.body);
    const savedCharacter = await newCharacter.save();
    res.status(201).json(savedCharacter);
  } catch (err) { 
    console.error(err); 
    if (err.name === 'ValidationError') { 
      return res.status(400).json({ message: 'Validation error', errors: err.errors }); 
    } 
    res.status(500).json({ message: 'Error creating character - Server Error' }); }
};

// _Update a character
export const updateCharacter = async (req, res) => {
  try {
    const updatedCharacter = await Character.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCharacter) {
      return res.status(404).json({ message: 'Character not found' });
    }
    res.json(updatedCharacter);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating character - Server Error' });
  }
};

// DELETE a character
export const deleteCharacter = async (req, res) => {
  try {
    const deletedCharacter = await Character.findByIdAndDelete(req.params.id);
    if (!deletedCharacter) {
      return res.status(404).json({ message: 'Character not found' });
    }
    res.status(204).send(); // 204 No Content for successful deletion
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting character - Server Error' });
  }
};
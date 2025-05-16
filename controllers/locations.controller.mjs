import Location from '../models/location.mjs';

/**
 * Logic for '/api/locations' API endpoints
 */

// GET all locations
export const getAllLocations = async (req, res) => {
    try {
        const locations = await Location.find();
        // if (locations.length === 0) {
        //     locations.push({message: "No data to display"})
        // }
        res.json(locations);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error retrieving locations; Server Error' });
    }
};

// GET location by ID
export const getLocationById = async (req, res) => {
    try {
        const location = await Location.findById(req.params.id);
        if (!location) {
            return res.status(404).json({ message: 'Location not found' });
        }
        res.json(location);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error retrieving location; Server Error' });
    }
};

// _Create a new location
export const createLocation = async (req, res) => {
    try {
        const newLocation = new Location(req.body);
        const savedLocation = await newLocation.save();
        res.status(201).json(savedLocation);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating new location - Server Error' });
    }
};

// _Update a location
export const updateLocation = async (req, res) => {
    try {
        const updatedLocation = await Location.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedLocation) {
            return res.status(404).json({ message: 'Location not found' });
        }
        res.json(updatedLocation);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error updating location - Server Error' });
    }
};

// DELETE a location
export const deleteLocation = async (req, res) => {
    try {
        const deletedLocation = await Location.findByIdAndDelete(req.params.id);
        if (!deletedLocation) {
            return res.status(404).json({ message: 'Location not found' });
        }
        res.status(204).send();
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error deleting location - Server Error' });
    }
};
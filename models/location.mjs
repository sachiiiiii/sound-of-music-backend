import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
    // Remove whitespace before and after fields that should be strings
    name: { type: String, required: true, trim: true },
    city: { type: String, trim: true },
    country: { type: String, trim: true },
    description: { type: String, trim: true }
}, {
    timestamps: true // Add createdAt and updatedAt fields
});

const Location = mongoose.model('Location', locationSchema);

export default Location;
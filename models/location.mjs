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

// Indexes for locations database collection
locationSchema.index({ name: 1 }); // Index the 'name' field
locationSchema.index({ city: 1 }); // Index the 'city' field
locationSchema.index({ country: 1 }); // Index the 'country' field
locationSchema.index({ name: 'text', description: 'text' }); // Text Index for searching within string fields

const Location = mongoose.model('Location', locationSchema);

export default Location;
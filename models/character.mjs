import mongoose from 'mongoose';

const characterSchema = new mongoose.Schema({
    // Remove whitespace before and after fields that should be strings
    name: { type: String, required: true, trim: true },
    role: { type: String, trim: true },
    family: { type: String, trim: true }
}, {
    timestamps: true // Add createdAt and updatedAt fields
});

// Indexes for characters databse collection
characterSchema.index({ name: 1 }); // Index the 'name' field (ascending order)
characterSchema.index({ family: 1 }); // Index the 'family' field

const Character = mongoose.model('Character', characterSchema);

export default Character;
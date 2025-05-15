import mongoose from 'mongoose';

const songSchema = new mongoose.Schema({
    // Remove whitespace before and after fields that should be strings
    title: { type: String, required: true, trim: true },
    artist: { type: String, trim: true },
    duration: { type: String, trim: true },
    mood: { type: String, trim: true },
    year: Number
}, {
    timestamps: true // Add createAt and updatedAt fields
});

// Indexes for songs database collection
songSchema.index({ title: 1 }); // Index the 'title' field
songSchema.index({ artist: 1 }); // Index the 'artist' field
songSchema.index({ mood: 1 }); // Index the 'mood' field
songSchema.index({ year: 1 }); // Index the 'year' field

const Song = mongoose.model('Song', songSchema);

export default Song;
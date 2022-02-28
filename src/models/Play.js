const mongoose = require("mongoose");

const PlaySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    period: {
        type: Date,
        required: true,
    },
    playTime: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    ageLimit: {
        type: Number,
        required: true,
    },
});

const Play = mongoose.model("Play", PlaySchema);

module.exports = Play;

const mongoose = require("mongoose");

const PlaySchema = new mongoose.Schema(
    {
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
            type: Number,
            required: true,
        },
        ageLimit: {
            type: Number,
            required: true,
        },
    },
    {
        timeStamps: true,
    },
);

module.exports = PlaySchema;

const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sustainabilityRating: {
        type: Number,
        required: true
    },
    season: {
        type: String,
        required: true
    }
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
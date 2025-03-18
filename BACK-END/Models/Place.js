const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    location: { 
        type: String, 
        required: true 
    },
    
    description: String,
    rating: { 
        type: Number, 
        min: 0, max: 5 
    }
});

module.exports = mongoose.model("Place", PlaceSchema);

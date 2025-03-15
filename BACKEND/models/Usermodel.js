const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    places: { 
        type: [String], 
        default: [] 
    },
    expenses: { 
        type: Number, 
        default: 0 
    }
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;

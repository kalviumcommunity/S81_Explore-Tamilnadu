const express = require("express");


const UserModel = require("../models/UserModel");  // ✅ Correct way

const router = express.Router();

// ✅ Create a new user
router.post("/users", async (req, res) => {
    try {
        const { username, email, places, expenses } = req.body;
        if (!username || !email) {
            return   res.status(400).json({ error: "Username and email are required." });
        }
        const user = new UserModel({ username, email, places, expenses });
        await user.save();
        res.status(201).json({ message: "User added successfully", user });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: error.message });
    }
});

// ✅ Bulk insert users Ensure correct path to model

router.post("/usersbulk", async (req, res) => { 
    try {
        // Validate that the request body is an array and not empty
        if (!Array.isArray(req.body) || req.body.length === 0) {
            return res.status(400).json({ error: "Request body must be a non-empty array" });
        }

        // Validate each user object
        for (const user of req.body) {
            if (!user.username || !user.email) {
                return res.status(400).json({ error: "Each user must have a username and an email" });
            }
        }

        // Insert users into the database
        const insertedUsers = await UserModel.insertMany(req.body);
        res.status(201).json({ message: "Users added successfully", users: insertedUsers });
    } catch (error) {
        console.error("Error inserting users:", error);
        res.status(500).json({ error: error.message });
    }
});



// ✅ Get all users
router.get("/users", async (req, res) => {
    try {
        const users = await UserModel.find({}, "username email places expenses");
        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: error.message });
    }
});

// ✅ Get a single user by ID
router.get("/users/:id", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id, "username email places expenses");
        if   (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ error: error.message });
    }
});

// ✅ Update a user by ID
router.put("/users/:id", async (req, res) => {
    try {
        const { username, email, places, expenses } = req.body;
        if (!username || !email) {
            return res.status(400).json({ error: "Username and email are required." });
        }
        const user = await UserModel.findByIdAndUpdate(
            req.params.id,
            { username, email, places, expenses },
            { new: true, runValidators: true }
        );
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json({ message: "User updated successfully", user });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ error: error.message });
    }
});

// ✅ Delete a user by ID
router.delete("/users/:id", async (req, res) => {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ error: error.message });
    }
});

// ✅ Correct module export
module.exports = router;

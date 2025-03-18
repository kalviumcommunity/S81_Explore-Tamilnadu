const express = require("express");
const mongoose = require("mongoose");
const Place = require("../Models/Place") 

const router = express.Router();

// ✅ CREATE - Add a new place
router.post("/places", async (req, res) => {
    try {
        const newPlace = new Place(req.body);
        await newPlace.save();
        res.status(201).json({ message: "Place added successfully", data: newPlace });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ READ - Get all places
router.get("/places", async (req, res) => {
    try {
        const places = await Place.find();
        res.status(200).json(places);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ READ - Get a single place by ID
router.get("/places/:id", async (req, res) => {
    try {
        const place = await Place.findById(req.params.id);
        if (!place) return res.status(404).json({ message: "Place not found" });
        res.status(200).json(place);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ UPDATE - Modify a place
router.put("/places/:id", async (req, res) => {
    try {
        const updatedPlace = await Place.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPlace) return res.status(404).json({ message: "Place not found" });
        res.status(200).json({ message: "Place updated successfully", data: updatedPlace });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ DELETE - Remove a place
router.delete("/places/:id", async (req, res) => {
    try {
        const deletedPlace = await Place.findByIdAndDelete(req.params.id);
        if (!deletedPlace) return res.status(404).json({ message: "Place not found" });
        res.status(200).json({ message: "Place deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

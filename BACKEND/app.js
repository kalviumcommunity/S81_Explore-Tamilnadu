const express = require("express");
const placeRoute= require("./controllers/placesRoute")

const app = express();

// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ Use Routes
app.use("/place", placeRoute);

module.exports = app; // ✅ Fix: Export app correctly

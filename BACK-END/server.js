const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./db/connection"); 
const placeRoute = require("./controllers/placesRoute");
const cors=require("cors")

const app = express();
const port = process.env.PORT || 8000;

app.use(cors({
    origin: "http://localhost:5173", // Frontend URL
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));

app.use(express.json()); 

app.use("/api", placeRoute);

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB Connection Failed:", error);
    });

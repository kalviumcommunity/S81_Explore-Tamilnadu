const express = require("express");
require("dotenv").config();
const connectDB = require("./db/connection"); 
const placeRoute=require("./controllers/placesRoute")

const app = express();
const port = process.env.PORT || 8000;

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

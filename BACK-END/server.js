const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose"); // ✅ Import mongoose
const connectDB = require("./db/connection");

const app = express();
const port = process.env.PORT || 8000;

// ✅ Home Route - Show DB Connection Status
app.get("/", (req, res) => {
    const dbStatus = mongoose.connection.readyState === 1 ? "Connected" : "Not Connected";
    res.json({ message: "Database Connection Status", status: dbStatus });
});

// ✅ Connect to Database and Start Server
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}).catch((error) => {
    console.error("MongoDB Connection Failed:", error);
});

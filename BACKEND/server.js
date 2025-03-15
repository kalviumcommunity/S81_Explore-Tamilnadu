const express = require("express");
require("dotenv").config();
const connectDB = require("./db/connection"); // Import DB connection
const app = require("./app"); // ✅ Import app from app.js

const port = process.env.PORT || 8000;

// ✅ Connect to Database and Start Server
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`🚀 Server is running on http://localhost:${port}`);
    });
}).catch((error) => {
    console.error("❌ MongoDB Connection Failed:", error);
});

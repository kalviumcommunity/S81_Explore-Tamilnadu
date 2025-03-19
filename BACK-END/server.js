const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;

// Add /ping route
app.get("/ping", (req, res) => {
    res.send("Pong!");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

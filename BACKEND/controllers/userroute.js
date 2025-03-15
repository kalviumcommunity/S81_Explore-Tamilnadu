const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors()); // If you intend to use CORS, make sure to call it

 const PORT = process.env.PORT

app.post('/post', (req, res) => {
    const { name, age } = req.body;

    if (!name) {
        return res.status(400).json({ msg: "Please enter your name correctly" });
    }
    if (!age) {
        return res.status(400).json({ msg: "Please enter your age" });
    }

    return res.status(200).json({ msg: `Your name is ${name} and your age is ${age}` });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
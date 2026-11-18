const express = require("express");
const cors = require("cors");
const db = require("./config/db");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "AI Recruitment Platform API is running!"
    });
});

const PORT = process.env.PORT || 5000;

app.get("/test-db", (req, res) => {
    db.query("SELECT * FROM users", (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.json(result);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

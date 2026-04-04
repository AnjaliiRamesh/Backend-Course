const express = require('express');
const noteModel = require("./models/note.model");

const app = express();

app.use(express.json());

app.post("/notes", async (req, res) => {
    const data = req.body;

    await noteModel.create({
        title: data.title,
        description: data.description
    });

    res.status(201).json({
        message: "note created"
    });
});

app.listen(3000, () => {
    console.log("Server running");
});

module.exports = app;

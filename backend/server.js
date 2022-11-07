const express = require("express");
const notes = require("./notes");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const { id } = req.params;
  const note = notes.filter((note) => note._id === parseInt(id));
  res.json(...note);
});

app.listen(
  process.env.PORT,
  console.log(`Server started on port ${process.env.PORT}`)
);

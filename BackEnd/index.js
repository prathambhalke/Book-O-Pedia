const express = require("express");
const { PORT, MONGODB_URL } = require("./config");
const mongoose = require("mongoose");
const { book } = require("./Models/BookModel");

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// GET route
app.get("/", (req, res) => {
  res.status(204)
  res.json("you are my b Oy its valentine");
  console.log("this is get");
});

// POST route
app.post("/books", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publish) {
      return res.status(400).send({
        message: 'send all the fields'
      });
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publish: req.body.publish
    };

    // Creating a new book using the book model
    const createdBook = await book.create(newBook);
    res.status(201).json(createdBook);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

// Connecting to MongoDB and starting the server
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("So, the server is started");
    app.listen(PORT, () => {
      console.log(`App server is started on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

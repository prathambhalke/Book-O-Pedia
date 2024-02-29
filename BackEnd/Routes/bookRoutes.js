const express = require("express");
const { book } = require("../Models/BookModel");

const router = express.Router();

// GET all books
router.get("/", async (req, res) => {
    try {
        const books = await book.find({});
        return res.status(200).json({
            count: books.length,
            data: books,
        });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

// POST a new book
router.post("/", async (req, res) => {
    try {
        const { title, author, publish, referenceLink, createdAt } = req.body;
        if (!title || !author || !publish || !referenceLink || !createdAt) {
            return res.status(400).json({ message: "Please provide all the fields" });
        }
        // Assuming your `book` model is defined and imported correctly
        const newBook = await book.create({ title, author, publish, referenceLink, createdAt });
        return res.status(201).json(newBook);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

// GET a single book by ID
router.get("/:id", async (req, res) => {
    try {
        const foundBook = await book.findById(req.params.id);
        if (!foundBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        return res.status(200).json(foundBook);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

// UPDATE a book by ID
router.put("/:id", async (req, res) => {
    try {
        const { title, author, publish } = req.body;
        if (!title || !author || !publish) {
            return res.status(400).json({ message: "Please provide all the fields" });
        }
        const updatedBook = await book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        return res.status(200).json({ message: "Book updated successfully", data: updatedBook });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

// DELETE a book by ID
router.delete("/:id", async (req, res) => {
    try {
        const deletedBook = await book.findByIdAndDelete(req.params.id);
        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        return res.status(200).json({ message: "Book deleted successfully" });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;

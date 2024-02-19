const express  = require("express")
const { book } = require("../Models/BookModel");


const router = express.Router();

// GET route
router.get("/", async (req, res) => {
    // console.log(res)
    const books = await book.find({});
    return res.status(202).json({
      count: books.length,
      data: books,
    });
  });
  
  // POST route
  router.post("/", async (req, res) => {
    try {
      if (!req.body.title || !req.body.author || !req.body.publish) {
        return res.status(400).send({
          message: "send all the fields",
        });
      }
      const newBook = {
        title: req.body.title,
        author: req.body.author,
        publish: req.body.publish,
      };
  
      // Creating a new book using the book model
      const createdBook = await book.create(newBook);
      res.status(201).json(createdBook);
    } catch (err) {
      console.log(err.message);
      res.status(500).send({ message: err.message });
    }
  });
  
  // GET single Book
  router.get("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const foundBook = await book.findById(id);
  
      if (!foundBook) {
        return res.status(404).json({ message: "Book not found" });
      }
  
      // return res.status(200).json(foundBook);
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  });
  
  //updating the data
  router.get("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const foundBook = await Book.findById(id);
  
      if (!foundBook) {
        return res.status(404).json({ message: "Book not found" });
      }
  
      return res.status(200).json(foundBook);
    } catch (err) {
      console.error(err.message);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  });
  
  //update the id
  router.put("/:id",async (req,res) => {
    try {
      if (!req.body.title || !req.body.author || !req.body.publish) {
        return res.status(400).send({
          message: "send all the fields",
        });
      }
  
      const id = req.params.id;
      const updatedBook = await book.findByIdAndUpdate(id,req.body);
  
      if(!updatedBook){
        return res.status(400).json({message : "add the all required fields"});
      }
      return res.status(200).send({message : "book updated successfully"})
  
    } catch (error) {
      return res.status(400).send({
        message: "send all the fields",
      });
    }
  })
  
  //Delete the item of particular id
  router.delete("/:id",async(req,res) => {
    try {
      const id = req.params.id;
      const deletebook = await book.findByIdAndDelete(id);
  
      if(!deletebook){
        return res.status(400).json({message : "Not found the book"});
      }
      return res.status(200).send({message : "book Deleted successfully"})
  
    } catch (error) {
      return res.status(400).send({
        message: "id not found",
      });
    }
  })

module.exports = router;
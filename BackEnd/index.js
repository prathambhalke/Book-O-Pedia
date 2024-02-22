const express = require("express");
require("dotenv").config();
// const { PORT, MONGODB_URL } = require("./config");
const mongoose = require("mongoose");
const bookRoutes = require('./Routes/bookRoutes')
const app = express();
var cors = require('cors')

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors())

// GET route
app.get("/", (req, res) => {
  res.status(204);
  console.log("you are my b Oy its valentine");
});

app.use("/books",bookRoutes)
// Connecting to MongoDB and starting the server
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("So, the server is started");
    app.listen(process.env.PORT, () => {
      console.log(`App server is started on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

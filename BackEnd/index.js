const express = require("express");
const { PORT, MONGODB_URL } = require("./config");
const mongoose = require("mongoose");
const bookRoutes = require('./Routes/bookRoutes')
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// GET route
app.get("/", (req, res) => {
  res.status(204);
  console.log("you are my b Oy its valentine");
});

app.use("/books",bookRoutes)
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

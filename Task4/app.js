// app.js
const mongoose = require("mongoose");
const express = require("express");
const app = express();

const dbURL = "mongodb://db:27017/mydb"; // MongoDB service name is 'db'
const port = 3000;

// Connect to MongoDB
mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.get("/", (req, res) => {
  res.send("Hello from Node.js!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

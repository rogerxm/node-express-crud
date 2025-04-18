require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGODB_URI;

const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server");
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected!");
    app.listen(PORT, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!!");
  });

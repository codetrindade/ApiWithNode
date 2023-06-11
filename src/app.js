'use strict';

const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// parse application
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect("mongodb+srv://trindadecode:tXbNt18b6rRQzjgn@nodestore.q0odbzr.mongodb.net/?retryWrites=true&w=majority");

// ? Loader Models
const product = require("./models/product");

// ? Loader Router
const indexRoute = require("./routes/index-route");
const productRoute = require("./routes/product-route");

app.use("/", indexRoute);
app.use("/products", productRoute);
module.exports = app;
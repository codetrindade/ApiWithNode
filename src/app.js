'use strict';

const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());
app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.end(JSON.stringify(req.body, null, 2))
});


mongoose.connect("mongodb+srv://trindadecode:tXbNt18b6rRQzjgn@nodestore.q0odbzr.mongodb.net/?retryWrites=true&w=majority");

// ? Loader Models
const product = require("./models/product");

// ? Loader Router
const indexRoute = require("./routes/index-route");
const productRoute = require("./routes/product-route");




app.use(product);
app.use("/", indexRoute);
app.use("/products", productRoute);
module.exports = app;
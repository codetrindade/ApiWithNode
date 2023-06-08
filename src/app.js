'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
})

//Load Router
const indexRoute = require("./routes/index-route");
const productRoute = require("./routes/product-route");

app.use("/", indexRoute);
app.use("/products", productRoute);
module.exports = app;
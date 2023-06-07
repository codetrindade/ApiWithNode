'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser);
app.use(bodyParser.urlencoded({extended: false}));

const router = express.Router();


const route = router.get('/', (req, res, next)=>{
    res.status(200).send({
        "title": "Estudo de API",
        "version": "0.0.1"
    });
});


app.use("/", create);
module.exports = app;
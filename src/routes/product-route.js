'use strict';
const express = require('express');

const router = express.Router();


router.put('/:id', (req, res, next)=>{
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
});

router.post('/', (req, res, next)=>{
    res.status(201).send(req.body);
});

router.delete('/', (req, res, next)=>{
    res.status(200).send(req.body);
});

module.exports = router;
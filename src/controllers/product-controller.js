"use strict";
const product = require("../models/product");

exports.post = (req, res, nex) => {
    var product = new product(req.body);
    product
        .save()
        .then((_) => {
            res.status(201).send({ message: "Produto Cadastrado Com Sucesso" });
        })
        .catch((e) => {
            res.status(404).send({
                message: "Produto Cadastrado Com Sucesso",
                data: e,
            });
        });
    res.status(201).send(req.body);
};
exports.delete = (req, res, nex) => {
    res.status(200).send(req.body);
};
exports.put = (req, res, nex) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body,
    });
};

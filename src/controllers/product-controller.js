"use strict";
const Product = require("../models/product");

exports.post = (req, res, next) => {
	var product = new Product(req.body);
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

exports.get = (req, res, next) => {
	Product.find()
		.then((data) => {
			res.status(201).send({ data });
		})
		.catch((e) => {
			res.status(404).send({
				message: "Error",
				data: e,
			});
		});
};

exports.getBySlug = (req, res, next) => {
	Product.findOne({ active: true, slug: req.params.slug })
		.then((data) => {
			res.status(201).send({ data });
		})
		.catch((e) => {
			res.status(404).send({
				message: "Error",
				data: e,
			});
		});
};

exports.getById = (req, res, nex) => {
	Product.findById({slug: req.params.id })
		.then((data) => {
			res.status(201).send({ data });
		})
		.catch((e) => {
			res.status(404).send({
				message: "Error",
				data: e,
			});
		});
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

"use strict";
const Product = require("../models/product");

exports.post = (req, res, next) => {
	var product = new Product(req.body);
	product
		.save()
		.then((x) => {
			res.status(201).send({ message: "Produto Cadastrado Com Sucesso" });
		})
		.catch((e) => {
			res.status(404).send({
				message: "Falh no Cadastro",
				data: e,
			});
		});
	res.status(201).send(req.body);
};

exports.get = async (req, res, next) => {
	Product.find({ active: true }, "title slug price tags")
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

exports.getById = (req, res, next) => {
	Product.findById({ slug: req.params.id })
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

exports.getByTag = (req, res, next) => {
	Product.find({ tag: req.params.tag, ative: true })
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

exports.delete = (req, res, next) => {
	Product.findByIdAndRemove(req.body.id)
		.then((x) => {
			res.status(201).send({ message: "Produto Eliminado Com Sucesso" });
		})
		.catch((e) => {
			res.status(404).send({
				message: "Falha",
				data: e,
			});
		});
	res.status(201).send(req.body);
};
exports.put = (req, res, nex) => {
	const id = req.params.id;
	res.status(200).send({
		id: id,
		item: req.body,
	});
};

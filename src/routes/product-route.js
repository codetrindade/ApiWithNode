'use strict';
const express = require('express');
const router = express.Router();
const controller = require("../controllers/product-controller.js");



router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.get('admin/:id', controller.getById);
router.put('/:id', controller.put);
router.post('/', controller.post);
router.delete('/', controller.delete);

module.exports = router;
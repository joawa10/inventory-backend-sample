// Route

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

// add more
router.get('/', productsController.getAllProducts);

module.exports = router;
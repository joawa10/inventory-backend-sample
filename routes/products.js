// Route

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.getAllProducts);

// router.post('/', productsController.postProducts);

router.put('/', productsController.putProducts);

router.delete('/:item_id', productsController.deleteProducts);

module.exports = router;
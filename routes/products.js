// Route

const express = require('express');

const productsController = require('../controllers/products');

const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, productsController.getAllProducts);

router.post('/', auth, productsController.postProducts);

router.put('/', auth, productsController.putProducts);

router.delete('/:item_id', auth, productsController.deleteProducts);

module.exports = router;
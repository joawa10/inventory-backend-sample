// Route
const express = require('express');

const ordersController = require('../controllers/orders');

const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, ordersController.getAllOrders);

router.post('/', auth, ordersController.postOrders);

router.put('/', auth, ordersController.putOrders);

router.delete('/:orders_id', auth, ordersController.deleteOrders);

module.exports = router;
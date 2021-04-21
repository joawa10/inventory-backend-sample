// Route
const express = require('express');

const ordersController = require('../controllers/orders');

const router = express.Router();

router.get('/', ordersController.getAllOrders);

router.post('/', ordersController.postOrders);

router.put('/', ordersController.putOrders);

router.delete('/:orders_id', ordersController.deleteOrders);

module.exports = router;
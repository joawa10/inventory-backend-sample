// Route
const express = require('express');

const order_detailsController = require('../controllers/order_details');

const router = express.Router();

router.get('/', order_detailsController.getAllOrder_details);

router.post('/', order_detailsController.postOrder_details);

router.put('/', order_detailsController.putOrder_details);

router.delete('/:item_id', order_detailsController.deleteOrder_details);

module.exports = router;
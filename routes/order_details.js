// Route
const express = require('express');

const order_detailsController = require('../controllers/order_details');

// const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', order_detailsController.getAllOrder_details);

router.post('/', order_detailsController.postOrder_details);

router.put('/', order_detailsController.putOrder_details);

router.delete('/:order_details_id', order_detailsController.deleteOrder_details);

// router.get('/', auth, order_detailsController.getAllOrder_details);

// router.post('/', auth, order_detailsController.postOrder_details);

// router.put('/', auth, order_detailsController.putOrder_details);

// router.delete('/:order_details_id', auth, order_detailsController.deleteOrder_details);

module.exports = router;
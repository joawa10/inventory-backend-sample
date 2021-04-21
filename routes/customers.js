// Route
const express = require('express');

const customersController = require('../controllers/customers');

const router = express.Router();

router.get('/', customersController.getAllCustomers);

router.post('/', customersController.postCustomers);

router.put('/', customersController.putCustomers);

router.delete('/:item_id', customersController.deleteCustomers);

module.exports = router;
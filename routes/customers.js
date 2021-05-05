// Route
const express = require('express');

const customersController = require('../controllers/customers');

const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, customersController.getAllCustomers);

router.post('/', auth, customersController.postCustomers);

router.put('/', auth, customersController.putCustomers);

router.delete('/:customers_id', auth, customersController.deleteCustomers);

module.exports = router;
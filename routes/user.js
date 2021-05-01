// Route

const express = require('express');

const usersController = require('../controllers/user');

const router = express.Router();

router.get('/', usersController.getAllUsers);

router.delete('/:user_id', usersController.deleteUsers);

module.exports = router;
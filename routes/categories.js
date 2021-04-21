// Route
const express = require('express');

const categoriesController = require('../controllers/categories');

const router = express.Router();

router.get('/', categoriesController.getAllCategories);

router.post('/', categoriesController.postCategories);

router.put('/', categoriesController.putCategories);

router.delete('/:category_id', categoriesController.deleteCategories);

module.exports = router;
// Route
const express = require('express');

const categoriesController = require('../controllers/categories');

// const auth = require('../middleware/auth');

const router = express.Router();

// router.get('/', auth, categoriesController.getAllCategories);

// router.post('/', auth, categoriesController.postCategories);

// router.put('/', auth, categoriesController.putCategories);

// router.delete('/:category_id', auth, categoriesController.deleteCategories);

router.get('/', categoriesController.getAllCategories);

router.post('/', categoriesController.postCategories);

router.put('/', categoriesController.putCategories);

router.delete('/:category_id', categoriesController.deleteCategories);

module.exports = router;
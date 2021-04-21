// Controller (Fetch the data)
const Categories = require('../models/category');

exports.getAllCategories = async (req, res, next) => {
  try {
    const [allCategories] = await Categories.fetchAll();
    res.status(200).json(allCategories);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postCategories = async (req, res, next) => {
  try {
    const postResponse = await Categories.post(req.body.category_name);
    res.status(201).json(postResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.putCategories = async (req, res, next) => {
  try {
    const putResponse = await Categories.update(req.body.category_id, req.body.category_name);
    res.status(200).json(putResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteCategories = async (req, res, next) => {
  try {
    const deleteResponse = await Categories.delete(req.params.category_id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
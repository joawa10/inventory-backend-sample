// Controller 

const Products = require('../models/products');

exports.getAllProducts = (req, res, next) => {
  res.send(Products.fetchAll());
};
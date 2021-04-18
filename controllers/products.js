// Controller (Fetch the data)

const Products = require('../models/products');

exports.getAllProducts = async (req, res, next) => {
  try {
    const [allProducts] = await Products.fetchAll();
    res.status(200).json(allProducts);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
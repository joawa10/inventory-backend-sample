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

// exports.postProducts = async (req, res, next) => {
//   try {
//     // const postResponse = await Products.post(req.body.item_name, req.body.category_id, req.body.quantity, req.body.price);
//     const postResponse = await Products.post(req.body.item_id, req.body.item_name, req.body.category_id, req.body.quantity, req.body.price);
//     res.status(201).json(postResponse);
//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };

exports.putProducts = async (req, res, next) => {
  try {
    const putResponse = await Products.update(req.body.item_id, req.body.item_name, req.body.category_id, req.body.quantity, req.body.price);
    res.status(200).json(putResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteProducts = async (req, res, next) => {
  try {
    const deleteResponse = await Products.delete(req.params.item_id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
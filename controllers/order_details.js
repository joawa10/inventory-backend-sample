// Controller (Fetch the data)
const Order_details = require('../models/order_detail');

exports.getAllOrder_details = async (req, res, next) => {
  try {
    const [allOrder_details] = await Order_details.fetchAll();
    res.status(200).json(allOrder_details);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postOrder_details = async (req, res, next) => {
  try {
    const postResponse = await Order_details.post(req.body.orders_orders_id, req.body.products_item_id);
    res.status(201).json(postResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.putOrder_details = async (req, res, next) => {
  try {
    const putResponse = await Order_details.update(req.body.order_details_id, req.body.orders_orders_id, req.body.products_item_id);
    res.status(200).json(putResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteOrder_details = async (req, res, next) => {
  try {
    const deleteResponse = await Order_details.delete(req.params.order_details_id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
// Controller (Fetch the data)
const Orders = require('../models/order');

exports.getAllOrders = async (req, res, next) => {
  try {
    const [allOrders] = await Orders.fetchAll();
    res.status(200).json(allOrders);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postOrders = async (req, res, next) => {
  try {
    const postResponse = await Orders.post(req.body.customers_id);
    res.status(201).json(postResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.putOrders = async (req, res, next) => {
  try {
    const putResponse = await Orders.update(req.body.orders_id, req.body.customers_id);
    res.status(200).json(putResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteOrders = async (req, res, next) => {
  try {
    const deleteResponse = await Orders.delete(req.params.orders_id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
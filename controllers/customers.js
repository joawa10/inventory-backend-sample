// Controller (Fetch the data)
const Customers = require('../models/customer');

exports.getAllCustomers = async (req, res, next) => {
  try {
    const [allCustomers] = await Customers.fetchAll();
    res.status(200).json(allCustomers);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postCustomers = async (req, res, next) => {
  try {
    const postResponse = await Customers.post(req.body.customers_name, req.body.address);
    res.status(201).json(postResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.putCustomers = async (req, res, next) => {
  try {
    const putResponse = await Customers.update(req.body.customers_id, req.body.customers_name, req.body.address);
    res.status(200).json(putResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteCustomers = async (req, res, next) => {
  try {
    const deleteResponse = await Customers.delete(req.params.customers_id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
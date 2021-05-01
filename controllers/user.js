// Controller (Fetch the data)
const Users = require('../models/user');

exports.getAllUsers = async (req, res, next) => {
  try {
    const [allUsers] = await Users.fetchAll();
    res.status(200).json(allUsers);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteUsers = async (req, res, next) => {
  try {
    const deleteResponse = await Users.delete(req.params.user_id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
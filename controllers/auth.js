const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');

const User = require('../models/user');

exports.signup = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return

  const user_name = req.body.user_name;
  const email = req.body.email;
  const password = req.body.password;

  try {
    const hashedPassword = await bcrypt.hash(password, 12)

    const userDetails = {
      user_name: user_name,
      email: email,
      password: hashedPassword
    }

    const result = await User.save(userDetails);

    res.status(201).json({ message: "User registered!" })
  } catch (error) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err)
  }
}
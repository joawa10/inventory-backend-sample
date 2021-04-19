// create a connection to the database

const mysql = require('mysql2');

const config = require('../config/config.json');

const pool = mysql.createPool({ // to constantly connect to database and request
  host: config.host,
  user: config.user,
  database: config.database,
  password: config.password,
});

module.exports = pool.promise();
const db = require('../util/database');

module.exports = class User {
  constructor(user_name, email, password) {
    this.user_name = user_name
    this.email = email;
    this.password = this.password;
  }

  static find(email) {
    return db.execute('SELECT * FROM inventory.user_login WHERE email = ?', [email]);
  }

  static save(user) {
    return db.execute(
      'INSERT INTO inventory.user_login (user_name, email, password) VALUES (?, ?, ?)', [user.user_name, user.email, user.password]
    );
  }
};


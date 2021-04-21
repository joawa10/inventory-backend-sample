// Model (Handle SQL interactions)
const db = require('../util/database');

module.exports = class Inventory {
  constructor(category_id, category_name) {
    this.category_id = category_id;
    this.category_name = category_name;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM inventory.category');
  }

  static post(category_name) { //changed
    return db.execute(
      'INSERT INTO inventory.category (category_name) VALUES (?)',
      [category_name]); //changed
  }

  static update(category_id, category_name) {
    return db.execute(
      'UPDATE inventory.category SET category_name = ? WHERE category_id = ?',
      [category_name, category_id]);
  }

  static delete(category_id) {
    return db.execute(
      'DELETE FROM inventory.category WHERE category_id = ?',
      [category_id]);
  }

}
// Model (Handle SQL interactions)
const db = require('../util/database');

module.exports = class Inventory {
  constructor(item_id, item_name, category_id, quantity, price) {
    this.item_id = item_id;
    this.item_name = item_name;
    this.category_id = category_id;
    this.quantity = quantity;
    this.price = price;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM inventory.products');
  }

  // static post(item_id, item_name, category_id, quantity, price) {
  //   return db.execute('INSERT INTO inventory.products (item_id, item_name, category_id, quantity, price) VALUES (?)', [item_id, item_name, category_id, quantity, price]);
  // }

  // static post(item_name, category_id, quantity, price) {
  //   return db.execute('INSERT INTO inventory.products (item_name, category_id, quantity, price) VALUES (?)', [item_name, category_id, quantity, price]);
  // }

  static update(item_id, item_name, category_id, quantity, price) {
    return db.execute('UPDATE inventory.products SET item_name = ?, category_id = ?, quantity = ?, price = ? WHERE item_id = ?', [item_name, category_id, quantity, price, item_id]);
  }

  static delete(item_id) {
    return db.execute('DELETE FROM inventory.products WHERE item_id = ?', [item_id]);
  }

}
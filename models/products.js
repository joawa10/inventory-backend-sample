// Model (Data)
const db = require('../util/database');

module.exports = class Inventory {
  constructor(item_id, item_name, categories, quantity, price) {
    this.item_id = id;
    this.item_name = itemName;
    this.categories = category;
    this.quantity = quantity;
    this.price = price;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM inventory.products');
  }
}
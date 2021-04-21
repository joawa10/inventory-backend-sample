// Model (Handle SQL interactions)
const db = require('../util/database');

module.exports = class Inventory {
  constructor(order_details_id, orders_orders_id, products_item_id) {
    this.order_details_id = order_details_id;
    this.orders_orders_id = orders_orders_id;
    this.products_item_id = products_item_id;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM inventory.order_details');
  }

  static post(orders_orders_id, products_item_id) { //changed
    return db.execute(
      'INSERT INTO inventory.order_details (orders_orders_id, products_item_id) VALUES (?, ?)',
      [orders_orders_id, products_item_id]); //changed
  }

  static update(order_details_id, orders_orders_id, products_item_id) {
    return db.execute(
      'UPDATE inventory.order_details SET orders_orders_id = ?, products_item_id = ? WHERE order_details_id = ?',
      [orders_orders_id, products_item_id, order_details_id]);
  }

  static delete(order_details_id) {
    return db.execute(
      'DELETE FROM inventory.order_details WHERE order_details_id = ?',
      [order_details_id]);
  }

}
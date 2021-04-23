// Model (Handle SQL interactions)
const db = require('../util/database');

module.exports = class Inventory {
  constructor(orders_id, customers_id, customers_name, address) {
    this.orders_id = orders_id;
    this.customers_id = customers_id;
    this.customers_name = customers_name;
    this.address = address;
  }

  static fetchAll() {
    return db.execute('SELECT orders_id, customers_name, address FROM inventory.orders, inventory.customers WHERE orders.orders_id = customers.customers_id');
  }

  static post(customers_id) { //changed
    return db.execute(
      'INSERT INTO inventory.orders (customers_id) VALUES (?)',
      [customers_id]); //changed
  }

  static update(orders_id, customers_id) {
    return db.execute(
      'UPDATE inventory.orders SET customers_id = ? WHERE orders_id = ?',
      [customers_id, orders_id]);
  }

  static delete(orders_id) {
    return db.execute(
      'DELETE FROM inventory.orders WHERE orders_id = ?',
      [orders_id]);
  }

}
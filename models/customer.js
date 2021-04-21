// Model (Handle SQL interactions)
const db = require('../util/database');

module.exports = class Inventory {
  constructor(customers_id, customers_name, address) {
    this.customers_id = customers_id;
    this.customers_name = customers_name;
    this.address = address;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM inventory.customers');
  }

  static post(customers_name, address) { //changed
    return db.execute(
      'INSERT INTO inventory.customers (customers_name, address) VALUES (?, ?)',
      [customers_name, address]); //changed
  }

  static update(customers_id, customers_name, address) {
    return db.execute(
      'UPDATE inventory.customers SET customers_name = ?, address = ? WHERE customers_id = ?',
      [customers_name, address, customers_id]);
  }

  static delete(customers_id) {
    return db.execute(
      'DELETE FROM inventory.customers WHERE customers_id = ?',
      [customers_id]);
  }

}
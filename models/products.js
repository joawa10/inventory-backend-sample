// Model (Data)

module.exports = class Inventory {
  constructor(item_id, item_name, categories, quantity, price) {
    this.item_id = id;
    this.item_name = itemName;
    this.categories = category;
    this.quantity = quantity;
    this.price = price;
  }

  static fetchAll() {
    return [
      {
        item_id: 1,
        item_name: 'itemName1',
        categories: 'category1',
        quantity: 1,
        price: 50
      },
      {
        item_id: 2,
        item_name: 'itemName2',
        categories: 'category2',
        quantity: 5,
        price: 100
      }
    ];
  }
}
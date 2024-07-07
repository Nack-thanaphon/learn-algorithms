class CartItem {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    removeItem(itemId) {
      this.items = this.items.filter(item => item.id !== itemId);
    }
  
    getTotal() {
      return this.items.reduce((total, item) => total + item.price, 0);
    }
  
    printItems() {
      this.items.forEach(item => console.log(`Item: ${item.name}, Price: ${item.price}`));
    }
  }
  
  // การใช้งาน
  const cart = new ShoppingCart();
  cart.addItem(new CartItem(1, 'Laptop', 1000));
  cart.addItem(new CartItem(2, 'Phone', 500));
  cart.printItems();
  console.log(`Total: ${cart.getTotal()}`);
  cart.removeItem(1);
  cart.printItems();
  console.log(`Total: ${cart.getTotal()}`);

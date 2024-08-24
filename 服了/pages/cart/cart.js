// pages/cart/cart.js
Page({
  data: {
    cartItems: [],
    totalPrice: 0
  },

  onLoad: function () {
    this.loadCart();
  },

  loadCart: function () {
    const cart = wx.getStorageSync('cart') || [];
    this.setData({ cartItems: cart }, this.calculateTotalPrice);
  },

  calculateTotalPrice: function () {
    let total = 0;
    this.data.cartItems.forEach(item => {
      total += item.price * item.quantity;
    });
    this.setData({ totalPrice: total.toFixed(2) });
  },

  increaseQuantity: function (e) {
    const id = e.currentTarget.dataset.id;
    const cartItems = this.data.cartItems.map(item => {
      if (item.id === id) item.quantity += 1;
      return item;
    });
    this.setData({ cartItems }, this.calculateTotalPrice);
    wx.setStorageSync('cart', cartItems);
  },

  decreaseQuantity: function (e) {
    const id = e.currentTarget.dataset.id;
    const cartItems = this.data.cartItems.map(item => {
      if (item.id === id && item.quantity > 1) item.quantity -= 1;
      return item;
    });
    this.setData({ cartItems }, this.calculateTotalPrice);
    wx.setStorageSync('cart', cartItems);
  },

  deleteItem: function (e) {
    const id = e.currentTarget.dataset.id;
    const cartItems = this.data.cartItems.filter(item => item.id !== id);
    this.setData({ cartItems }, this.calculateTotalPrice);
    wx.setStorageSync('cart', cartItems);
  },

  checkout: function () {
    wx.navigateTo({
      url: '/pages/checkout/checkout'
    });
  
  }
});

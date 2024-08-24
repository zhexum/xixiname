// pages/grape-details/grape-details.js
Page({
  data: {
    grape: {
      id: 9,
      name: '葡萄',
      price: 11.00,
      image: '/图片/grape.png'
    }
  },

  addToCart: function () {
    this.addProductToCart(this.data.grape);
  },

  addProductToCart: function (product) {
    const cart = wx.getStorageSync('cart') || [];
    const index = cart.findIndex(item => item.id === product.id);
    if (index === -1) {
      product.quantity = 1;
      cart.push(product);
    } else {
      cart[index].quantity += 1;
    }
    wx.setStorageSync('cart', cart);
    wx.showToast({
      title: `已添加${product.name}`,
      icon: 'success'
    });
    setTimeout(() => {
      wx.navigateTo({
        url: '/pages/cart/cart'
      });
    }, 1000);
  }
});
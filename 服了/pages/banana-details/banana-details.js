// pages/banana-details/banana-details.js
Page({
  data: {
    banana: {
      id: 2,
      name: '香蕉',
      price: 12.00,
      image: '../../图片/banana.png'
    }
  },

  addToCart: function () {
    this.addProductToCart(this.data.banana);
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
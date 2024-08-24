// pages/pear-details/pear-details.js
Page({
  data: {
    peach: {
      id: 6,
      name: '桃子',
      price: 9.00,
      image: '/图片/peach.png'
    }
  },

  addToCart: function () {
    this.addProductToCart(this.data.peach);
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
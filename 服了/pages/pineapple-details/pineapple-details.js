// pages/pineapple-details/pineapple-details.js
// pages/pear-details/pear-details.js
Page({
  data: {
    pineapple: {
      id: 4,
      name: '菠萝',
      price: 15.00,
      image: '/图片/pineapple.png'
    }
  },

  addToCart: function () {
    this.addProductToCart(this.data.pineapple);
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
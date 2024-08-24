// pages/pear-details/pear-details.js
Page({
  data: {
    pear: {
      id: 3,
      name: '香梨',
      price: 10.00,
      image: '/图片/Pear.png'
    }
  },

  addToCart: function () {
    this.addProductToCart(this.data.pear);
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
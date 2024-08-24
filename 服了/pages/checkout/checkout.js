// pages/checkout/checkout.js
Page({
  data: {
    cartItems: [],
    totalPrice: 0,
    paymentMethods: ['支付宝', '微信支付', '信用卡'],
    selectedMethodIndex: 0
  },

  onLoad: function () {
    this.loadCart();
  },

  loadCart: function () {
    const cartItems = wx.getStorageSync('cart') || [];
    let totalPrice = 0;
    cartItems.forEach(item => {
      totalPrice += item.price * item.quantity;
    });
    this.setData({ cartItems, totalPrice: totalPrice.toFixed(2) });
  },

  onPaymentMethodChange: function (e) {
    this.setData({ selectedMethodIndex: e.detail.value });
  },

  makePayment: function () {
    wx.showToast({
      title: '结算成功',
      icon: 'success'
    });
  
    // 清空购物车
    setTimeout(() => {
      // 清空购物车数据
      wx.removeStorageSync('cart');
      console.log('购物车已清空');
    }, 500);
      setTimeout(() => {
      // 导航到首页或其他页面
      wx.reLaunch({
        url: '/pages/index/index' // 替换为你要返回的页面路径
      });
    }, 500);
    // 延迟时间为2000毫秒，即2秒
  }
});

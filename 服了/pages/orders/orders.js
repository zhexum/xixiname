// pages/orders/orders.js
Page({
  data: {
    orders: [] // 用于存储订单数据
  },

  onLoad: function () {
    this.fetchOrderDetails();
  },

  fetchOrderDetails: function () {
    // 假设有一个API接口可以获取用户最新的订单信息
    wx.request({
      url: '', // 替换成实际的订单接口
      method: 'GET',
      success: (res) => {
        if (res.statusCode === 200) {
          this.setData({
            orders: res.data.orders // 设置订单数据到页面数据中
          });
        } else {
          wx.showToast({
            title: '获取订单失败',
            icon: 'none'
          });
        }
      },
      fail: (err) => {
        wx.showToast({
          title: '网络错误',
          icon: 'none'
        });
      }
    });
  }
});
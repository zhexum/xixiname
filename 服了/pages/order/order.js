// pages/order/order.js
Page({
  navigateToOrders: function () {
    wx.navigateTo({
      url: '/pages/orders/orders'
    });
  },
  navigateToSettings: function () {
    wx.navigateTo({
      url: '/pages/settings/settings'
    });
  },
  navigateToHelp: function () {
    wx.navigateTo({
      url: '/pages/help/help'
    });
  },
  
  logout: function () {
    // 处理用户退出登录的逻辑
    wx.showModal({
      title: '确认退出',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          // 清除用户登录状态和缓存
          wx.clearStorage();
          wx.redirectTo({
            url: '/pages/login/login'
          });
        }
      }
    });
  }
});
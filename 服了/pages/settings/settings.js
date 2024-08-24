// pages/settings/settings.js
Page({
  data: {
    address: '' // 初始化地址数据
  },

  onLoad: function () {
    // 从本地存储中读取保存的地址
    const savedAddress = wx.getStorageSync('address') || '';
    this.setData({
      address: savedAddress
    });
  },

  onAddressInput: function (event) {
    this.setData({
      address: event.detail.value
    });
  },

  saveAddress: function () {
    // 保存地址到本地存储
    wx.setStorageSync('address', this.data.address);

    wx.showToast({
      title: '地址已保存',
      icon: 'success',
      duration: 2000
    });
  }
});

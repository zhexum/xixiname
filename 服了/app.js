// app.js
App({
  globalData: {
    current: 0,
    list: [{
        pagePath: "/pages/index/index",
        iconPath: "/图片/home.png",
        selectedIconPath: "/图片/tabbar-home-selected.png",
        text: "首页"
      },
      
      {
        pagePath: "/pages/order/order",
        iconPath: "/图片/login.png",
        selectedIconPath: "/图片/tabbar-login-selected.png",
        text: "用户"
      },
      {
        pagePath: "/pages/cart/cart",
        iconPath: "/图片/cart.png",
        selectedIconPath: "/图片/cart.selected.png",
        text: "购物车"
      }
    ]
  },
})

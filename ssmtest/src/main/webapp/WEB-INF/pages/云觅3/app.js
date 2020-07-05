//app.js
App({
  data: {
   
    url: 'http://localhost:8080/',//'http://localhost:8080/',
    username: '' //账号
  },
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
  // 优惠券的相关
  cart: {
    key: "cart",
    ref: "",
    // 兑换入库
    add: function (p) {
      var re = false;
      if (p.name && p.price && p.des && p.validtime && p.money && p.num) {
        var dic = wx.getStorageSync(this.key) || {};
        if (!(p.name in dic)) {
          dic[p.name] = {
            name: p.name,
            price: p.price,
            des: p.des,
            validtime: p.validtime,
            money: p.money,
            num: p.num
          }
        } else {
          dic[p.name].num += p.num;
        }
        wx.setStorageSync(this.key, dic);
        re = true;
      }
      return re;
    },
    // 优惠券张数
    getNum: function () {
      var n = 0;
      var dic = wx.getStorageSync(this.key) || {}
      for (var i in dic) {
        n += dic[i].num;
      }
      return n;
    },
    // 遍历优惠券张数
    getList: function () {
      var list = [];
      var dic = wx.getStorageSync(this.key);
      for (var p in dic) {
        list.push({ name: dic[p].name, price: dic[p].price, num: dic[p].num, des: dic[p].des, validtime: dic[p].validtime, money: dic[p].money });
      }
      return list;
    },
  
  },
})
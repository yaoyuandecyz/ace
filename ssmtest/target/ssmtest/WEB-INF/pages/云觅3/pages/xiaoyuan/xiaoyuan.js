//index.js
//获取应用实例
const app = getApp()

Page({
      data: {
        username: '',
        password: '',
        f: ''
      },
      //事件处理函数
      bindViewTap: function() {
        wx.navigateTo({
          url: '../logs/logs'
        })
      },
      onShow: function() {
        // 生命周期函数--监听页面显示
        wx.hideTabBar({})
      },
      onLoad: function() {

      },


      // 获取输入账号 
      usernameInput: function(e) {
        this.setData({
          username: e.detail.value
        })
      },

      // 获取输入密码 
      passwordInput: function(e) {
        this.setData({
          password: e.detail.value
        })
      },

      // 登录处理
      login: function() {
        var that = this
        app.data.username = that.data.username;
        wx.request({
            url: app.data.url + 'UserController/Login', //自己请求的服务器的地址
            data: {
              "username": that.data.username,
              "password": that.data.password
            },
            method: 'POST',
            header: {
              'content-type': 'application/json;charset=UTF-8', // 默认值
              'dataType': 'json'
            },
            success: function(req) {
              var getdata = req.data;
              that.setData({
                f: getdata
              })
              if (that.data.f.flag) {
                wx.switchTab({
                  url: '../schooluser/schooluser'
                });
              } else {
                wx.showModal({
                  title: '提示：',
                  content: '账号或密码输入错误！',
                })
              }
            }
        })
      },
})
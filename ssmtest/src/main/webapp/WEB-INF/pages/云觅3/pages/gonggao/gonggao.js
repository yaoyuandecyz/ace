// pages/rt3/rt3.js
//获取应用实例

Page({

  data: {

    img_url: [],
    content: ''
  },
  onLoad: function (options) {

  },
  input: function (e) {
    this.setData({
      content: e.detail.value
    })
  },


  //发布动态按钮
  search: function (e) {
    console.log("你点击了发布");
    wx.navigateTo({
      url: '../DontaiFaBu/DontaiFaBu',
      success: function (res) {
        console.log("正在发布");
      },
      fail: function (res) {
        console.log("发布失败");
      },
      complete: function (res) {
        console.log("发布完成");
      },
    });
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面 
      success: function (res) {
        // success 
      },
      fail: function () {
        // fail 
      },
      complete: function () {
        // complete 
      }
    })

  },





})

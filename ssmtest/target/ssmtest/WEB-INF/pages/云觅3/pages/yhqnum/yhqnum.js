// pages/yhq/yhqnum.js
var yhqdata = require("../../utils/yhqdata.js")
var base = getApp();

Page({

  data: {
    tab: 0,
    plist: [],
  },

  onLoad: function (e) {


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   * 遍历循环优惠卷张数
   */
  onShow: function () {
    var l = base.cart.getList();
    this.setData({ plist: l });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  changeTab: function (e) {
    var d = e.currentTarget.dataset.index;
    this.setData({ tab: d });
  },
})
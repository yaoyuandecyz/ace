// pages/fabu/fabu.js
Page({

  data: {
    array: ['生活用品', '证件', '电子设备', '学习用品'],
    objectArray: [{
        id: 0,
        name: '生活用品'
      },
      {
        id: 1,
        name: '证件'
      },
      {
        id: 2,
        name: '电子设备'
      },
      {
        id: 3,
        name: '学习用品'
      },
    ],
    leixing: 0,

    jianjiaoshuzarray: ['拾', '寻'],
    objectjianjiaoshuz: [{
      id: 0,
      name: '拾'
    },
    {
      id: 1,
      name: '寻'
    },
    ],
    jianjiaoshuz: 0,
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      leixing: e.detail.value
    })
  },
  bindPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      jianjiaoshuz: e.detail.value
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

})

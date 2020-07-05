// pages/yhq/yhq.js
var base = getApp();
var yhqData = require('../../utils/yhqdata.js');

Page({

  data: {
    imgMinList: [],
    name: '',
    des: '',
    prices: '',
  },

  onLoad: function (e) {
    console.log(e);
    // 优惠券列表
    var yhqnum = e.yhqnum;
    var jifennum = e.jifennum;
    console.log(jifennum);
    var obj = yhqData.data[e.pname];
    wx.setNavigationBarTitle({
      title: obj.pname,
    });
    this.setData({
      name: obj.name,
      des: obj.des,
      prices: obj.price,
      img2: obj.img,
      money: obj.money,
      validtime: obj.validtime,
      num: 1
    })


  },
  addCart: function () {
    var that = this;
    if (base.cart.add({
      name: this.data.name,
      des: this.data.des,
      price: this.data.prices,
      money: this.data.money,
      validtime: this.data.validtime,
      num: this.data.num,

    })) {
      this.setData({ yhqNum: base.cart.getNum() })
      this.setData({
        jifenNum: that.jifenNum()

      })
      wx.showModal({
        title: '兑换成功！',
        content: "跳转到优惠券拥有页或留在当前页",
        showCancel: true,
        cancelText: "留在此页",
        confirmText: "优惠券页",
        success: function (res) {
          if (res.confirm) {
            that.goc();
          }
        }
      })
      // }
    }
  },
  goc: function () {
    var that = this;
    var ref = "../yhqnum/yhqnum?pname=" + that.data.name;
    console.log(ref);
    wx.navigateTo({
      url: ref,
    })
  },
  // 积分换算
  jifenNum: function () {
    var pname = this.data.name;
    var jifennum = wx.getStorageSync('jifen');
    var dic = wx.getStorageSync('cart');
    jifennum -= dic[pname].price;
    wx.setStorageSync('jifen', jifennum);
    return jifennum;
  }
})
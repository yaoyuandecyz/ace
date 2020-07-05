//index.js
//获取应用实例
const base = getApp();
var yhqData = require('../../utils/yhqdata.js')



Page({
  data: {
    shangchengList: ['lunbo1', 'lunbo2', 'lunbo3'],
    yhnum: 0,
    num: 10,
    yhqnum: 0,
    // 印花,
    name1: "悬赏印花",
    des1: "用来发布悬赏任务的",
    price: "2",
    listyhq: []
  },

  onLoad: function () {
    // 积分入缓存
    var jifennum = this.data.num || {};
    wx.setStorage({
      key: 'jifen',
      data: jifennum,
    })



    // 优惠券列表
    var yhqlist = [];
    var dic = yhqData.data;
    for (var i in dic) {
      yhqlist.push({
        name: dic[i].name,
        des: dic[i].des,
        price: dic[i].price,
        img: dic[i].img,
      })
    }
    this.setData({
      "listyhq": yhqlist
    });
    console.log(yhqlist)

  },
  // 优惠券张数
  onShow: function (e) {
    this.setData({
      yhqnum: base.cart.getNum()
    });
    var jifennum = wx.getStorageSync('jifen');
    this.setData({
      num: jifennum
    })
  },
  goDetail: function (e) {
    var des = e.currentTarget.dataset.pdes;
    var d = e.currentTarget.dataset.pname;
    var p = e.currentTarget.dataset.prices;
    var img2 = e.currentTarget.dataset.img2;
    var yhqnum = this.data.yhqnum;
    var jifennum = this.data.num;

    if (d) {
      wx.navigateTo({
        url: '../yhqdata/yhqdata?pname=' + d + "&pdes=" + des + "&prices=" + p + "&pimg=" + img2 + "&yhqnum=" + yhqnum + "&jifennum=" + jifennum
      })
    }
  },
  yhqnum: function () {
    wx.navigateTo({
      url: '../yhqnum/yhqnum',

    })
  },


})
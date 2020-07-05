//index.js
//获取应用实例
const app = getApp()
var amapFile = require('../libs/amap-wx.js');
var markersData ={
  latitude:'',    //纬度
  longitude:'',       //经度
  key:"56a0b3625f125d6a7c1ffbfd2f77e20a"
}

Page({
  data: {
  textData:'',
  name:'',
  background:['tu1','tu2','tu3'],
    animationData: {}, //公告动画
    announcementText: "陈小小于2月1号在广东白云学院至善楼遗失了一个u盘，联系电话：12138",//公告内容
  },
  onLoad: function (options) {
    this.loadInfo();
    var that = this;
    //创建动画实例
    var animation = wx.createAnimation({
      //此处以公告最长内容来设置动画持续时间（duration：决定整个动画播放的速度）
      duration: 9000,
      timingFunction: 'linear'
    });
    //偏移距离为公告内容的长度*字体大小（若字体大小使用rpx需要换算成px）
    animation.translate(-Number(this.data.announcementText.length * 12), 0).step();
    this.setData({
      animationData: animation.export()
    });
    // 循环播放动画关键步骤（使用两个定时器）
    // 第一个定时器：将字幕恢复到字幕开始点（为屏幕左边）
    this.recoveraAnimation = setInterval(function () {
      animation.translate(300, 0).step({ duration: 0 });
      this.setData({
        animationData: animation.export()
      });
    }.bind(this), 9000);
    // 第二个定时器：重新开始移动动画
    this.restartAnimation = setInterval(function () {
      animation.translate(-Number(this.data.announcementText.length * 12), 0).step();
      this.setData({
        animationData: animation.export()
      });
    }.bind(this), 9001);
    //第三个定时器：重新开始移动动画
    this.restartAnimation = setInterval(function () {
      animation.translate(-Number(this.data.announcementText.length * 12), 0).step();
      this.setData({
        animationData: animation.export()
      });
    }.bind(this), 9001);
  },

  onUnload: function () {
    //清除定时器
    clearInterval(this.recoveraAnimation);
    clearInterval(this.restartAnimation);
  },
// 获取当前位置
loadInfo: function(){
  var that=this;
  wx.getLocation({
    type: 'gcj02',     //返回用于wx。openlocation的经纬度
    success: function(res) {
      var latitude =res.latitude
      var longititude =res.longitude
      console.log(res);
      that.loadCity(latitude,longititude);
    },
  })
},
// 把获得的经纬度传给高德地图，调用高德API获取当前地理位置
 loadCity: function(latitude,longititude){
  var that = this;
  console.log(latitude);
   var myAmapFun = new amapFile.AMapWX({key:markersData.key});

   myAmapFun.getRegeo({

     location:longititude+','+latitude,
     success:function(data){
      that.setData({
         name:data[0].name,

       })
       console.log(data);
     },
     fail:function(data){
       console.log('获取失败')
     }
   });
  }
})

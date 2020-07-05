Page({
  data: {
    navState: 0,//导航状态

    animationData: {}, //公告动画
    announcementText: "营业时间从早上10点到晚上8点，支持预先下单，祝用餐愉快",//公告内容

  },
  //监听滑块
  bindchange(e) {
    // console.log(e.detail.current)
    let index = e.detail.current;
    this.setData({
      navState: index
    })
  },
  //点击导航
  navSwitch: function (e) {
    // console.log(e.currentTarget.dataset.index)
    let index = e.currentTarget.dataset.index;
    this.setData({
      navState: index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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














})

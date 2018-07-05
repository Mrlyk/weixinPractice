// pages/first/first.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    artical_key: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var artical = [{
        img: "/images/pic/pic01.png",
        date: "2017-08-09",
        title: "望庐山瀑布",
        content: "日照香炉生紫烟，遥看瀑布挂前川。飞流直下三千尺，疑是银河落九天。"

      },
      {
        img: "/images/pic/pic02.png",
        date: "2017-09-29",
        title: "登鹳雀楼",
        content: "白日依山尽，黄河入海流。欲穷千里目，更上一层楼。"


      },
      {
        img: "/images/pic/pic03.png",
        date: "2017-11-21",
        title: "望天门山",
        content: "天门中断楚江开，碧水东流至此回。两岸青山相对出，孤帆一片日边来。"


      }



    ]
    this.setData({
      artical_key: artical
    });

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

  }
})
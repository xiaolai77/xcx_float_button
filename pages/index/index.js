//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    backTop:false
  },
  //监听页面滚动
  onPageScroll: function (e) {
      var that = this
      var scrollTop = e.scrollTop
      var backTop = scrollTop > 100 ? true : false
      that.setData({
        backTop: backTop
      })
  },
  
})

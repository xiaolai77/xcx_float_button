Component({
  properties: {
    backTop: { // 属性名
      type: Boolean,
      value: ''
    }
  },
  methods: {
    itemclick: function (e) {
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 400
      })
    },
    calling: function () {
      wx.makePhoneCall({
        phoneNumber: '18088888888',
        success: function () {
          console.log("拨打电话成功！")
        },
        fail: function () {
          console.log("拨打电话失败！")
        }
      })
    }
  }
})

Page({
  data: {
    message: '操作已完成'
  },

  onLoad(options) {
    // 从上一页获取成功信息
    if (options.message) {
      this.setData({
        message: decodeURIComponent(options.message)
      });
    }
  },

  goHome() {
    wx.reLaunch({
      url: '/pages/index/index'
    });
  },

  goBack() {
    wx.navigateBack();
  }
});
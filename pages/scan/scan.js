Page({
  data: {
    brand: '',
    frameNumber: '',
    color: '',
    statusIndex: 0,
    statusOptions: ['全新 (Brand New)', '九成新', '有使用痕迹'],
    photoPath: ''
  },

  goBack() {
    wx.navigateBack();
  },

  uploadPhoto() {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['camera', 'album'],
      success: (res) => {
        this.setData({
          photoPath: res.tempFiles[0].tempFilePath
        });
        wx.showToast({
          title: '照片已上传',
          icon: 'success'
        });
      }
    });
  },

  onBrandChange(e) {
    this.setData({ brand: e.detail.value });
  },

  onFrameChange(e) {
    this.setData({ frameNumber: e.detail.value });
  },

  onColorChange(e) {
    this.setData({ color: e.detail.value });
  },

  onStatusChange(e) {
    this.setData({ statusIndex: e.detail.value });
  },

  generateQRCode() {
    if (!this.data.brand || !this.data.frameNumber) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none'
      });
      return;
    }

    wx.showToast({
      title: '二维码已生成',
      icon: 'success'
    });

    setTimeout(() => {
      wx.navigateTo({
        url: '/pages/myBikes/myBikes'
      });
    }, 1000);
  }
});
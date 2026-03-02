Page({
  data: {
    typeIndex: 0,
    typeOptions: ['违规停泊', '车辆损坏', '其他问题'],
    reportType: '',
    location: '',
    bikeId: '',
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

  onTypeChange(e) {
    this.setData({
      typeIndex: e.detail.value,
      reportType: this.data.typeOptions[e.detail.value]
    });
  },

  onLocationChange(e) {
    this.setData({
      location: e.detail.value
    });
  },

  onBikeIdChange(e) {
    this.setData({
      bikeId: e.detail.value
    });
  },

  submitReport() {
    if (!this.data.location) {
      wx.showToast({
        title: '请填写位置描述',
        icon: 'none'
      });
      return;
    }

    wx.showToast({
      title: '举报已提交',
      icon: 'success'
    });

    setTimeout(() => {
      wx.navigateTo({
        url: '/pages/success/success'
      });
    }, 1000);
  }
});
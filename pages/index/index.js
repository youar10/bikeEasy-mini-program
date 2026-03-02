Page({
  data: {
    latitude: 22.3193,
    longitude: 114.1733,
    scale: 16,
    startLocation: '维多利亚公园',
    endLocation: '中环',
    markers: [
      {
        id: 1,
        latitude: 22.3193,
        longitude: 114.1733,
        title: '维多利亚公园站'
      }
    ],
    selectedLocation: {
      name: '维多利亚公园站',
      distance: '150 公尺',
      walkTime: '2 分钟',
      available: 12,
      total: 20
    }
  },

  onLoad() {
    this.getCurrentLocation();
  },

  getCurrentLocation() {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        });
      }
    });
  },

  onStartChange(e) {
    this.setData({
      startLocation: e.detail.value
    });
  },

  onEndChange(e) {
    this.setData({
      endLocation: e.detail.value
    });
  },

  navigateTo() {
    wx.showToast({
      title: '正在打开地图导航...',
      icon: 'loading'
    });
  },

  goToReport() {
    wx.navigateTo({
      url: '/pages/report/report'
    });
  }
});
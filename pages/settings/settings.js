Page({
  data: {
    userPhone: '+852 9876 5432',
    cacheSize: '12.5 MB',
    settings: {
      location: true,
      notification: true
    }
  },

  onLoad() {
    this.loadSettings();
  },

  loadSettings() {
    // 从本地存储加载设置
    const settings = wx.getStorageSync('settings');
    if (settings) {
      this.setData({ settings });
    }
  },

  goBack() {
    wx.navigateBack();
  },

  changePassword() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    });
  },

  changePhone() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    });
  },

  toggleLocation(e) {
    const settings = this.data.settings;
    settings.location = e.detail.value;
    this.setData({ settings });
    wx.setStorageSync('settings', settings);
  },

  toggleNotification(e) {
    const settings = this.data.settings;
    settings.notification = e.detail.value;
    this.setData({ settings });
    wx.setStorageSync('settings', settings);
  },

  privacyPolicy() {
    wx.navigateTo({
      url: '/pages/settings/privacy'
    });
  },

  checkUpdate() {
    wx.showToast({
      title: '已是最新版本',
      icon: 'success'
    });
  },

  clearCache() {
    wx.showModal({
      title: '确认清除？',
      content: '将删除所有缓存数据',
      success: (res) => {
        if (res.confirm) {
          wx.clearStorageSync();
          this.setData({ cacheSize: '0 MB' });
          
          wx.showToast({
            title: '已清除',
            icon: 'success'
          });
        }
      }
    });
  },

  aboutUs() {
    wx.showModal({
      title: '关于单车易',
      content: '单车易 v1.0.0\n\n您的环保单车伙伴\n\n© 2024 BikeEasy',
      showCancel: false
    });
  },

  feedback() {
    wx.openDocument({
      filePath: 'https://example.com/feedback'
    });
  },

  serviceTerms() {
    wx.navigateTo({
      url: '/pages/settings/terms'
    });
  }
});
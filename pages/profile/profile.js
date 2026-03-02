Page({
  data: {
    userInfo: {
      name: '单车爱好者',
      phone: '+852 9876 5432'
    },
    stats: {
      bikes: 3,
      reports: 12,
      level: 5,
      carbonCredit: 1250,
      carbonSaved: 42.8,
      distance: 156.5
    }
  },

  onLoad() {
    this.getUserInfo();
  },

  getUserInfo() {
    const userInfo = wx.getStorageSync('userInfo');
    if (userInfo) {
      this.setData({ userInfo });
    }
  },

  goToMyBikes() {
    wx.navigateTo({
      url: '/pages/myBikes/myBikes'
    });
  },

  goToReportHistory() {
    wx.navigateTo({
      url: '/pages/reportHistory/reportHistory'
    });
  },

  goToSavedLocations() {
    wx.navigateTo({
      url: '/pages/savedLocations/savedLocations'
    });
  },

  goToSettings() {
    wx.navigateTo({
      url: '/pages/settings/settings'
    });
  },

  logout() {
    wx.showModal({
      title: '确认退出登录？',
      content: '退出后需要重新登录',
      success: (res) => {
        if (res.confirm) {
          wx.removeStorageSync('auth_token');
          wx.removeStorageSync('userInfo');
          
          wx.reLaunch({
            url: '/pages/login/login'
          });
        }
      }
    });
  }
});
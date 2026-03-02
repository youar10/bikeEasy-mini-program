App({
  onLaunch() {
    console.log('BikeEasy App launched');
    this.checkUserAuth();
  },

  checkUserAuth() {
    const token = wx.getStorageSync('auth_token');
    const userInfo = wx.getStorageSync('userInfo');
    
    if (!token || !userInfo) {
      wx.navigateTo({
        url: '/pages/onboarding/onboarding'
      });
    }
  },

  onShow() {
    console.log('App showed');
  },

  onHide() {
    console.log('App hidden');
  },

  globalData: {
    userInfo: null,
    token: null,
    apiBaseUrl: 'https://api.bikeasy.example.com'
  }
});
Component({
  properties: {
    activeTab: {
      type: String,
      value: 'index'
    }
  },

  methods: {
    switchTab(e) {
      const tab = e.currentTarget.dataset.tab;
      
      const tabMap = {
        index: '/pages/index/index',
        scan: '/pages/scan/scan',
        report: '/pages/report/report',
        shops: '/pages/shops/shops',
        profile: '/pages/profile/profile'
      };

      wx.switchTab({
        url: tabMap[tab]
      });
    }
  }
});
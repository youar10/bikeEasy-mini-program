Page({
  data: {
    locations: [
      {
        id: 'loc_001',
        name: '维多利亚公园停车点',
        address: '民光街近3号码头',
        type: '停车点',
        icon: '📍',
        latitude: 22.3193,
        longitude: 114.1733
      },
      {
        id: 'loc_002',
        name: '中环码头停车点',
        address: '中环海滨',
        type: '停车点',
        icon: '📍',
        latitude: 22.2833,
        longitude: 114.1667
      },
      {
        id: 'shop_001',
        name: '中环单车工坊',
        address: '中环',
        type: '商家',
        icon: '🏪',
        latitude: 22.2833,
        longitude: 114.1667
      }
    ]
  },

  onLoad() {
    this.getSavedLocations();
  },

  getSavedLocations() {
    // 从服务器获取保存的地点
    console.log('获取收藏地点');
  },

  navigateTo(e) {
    const lat = e.currentTarget.dataset.lat;
    const lng = e.currentTarget.dataset.lng;
    
    wx.openLocation({
      latitude: parseFloat(lat),
      longitude: parseFloat(lng),
      name: '目的地'
    });
  },

  editLocation(e) {
    const locationId = e.currentTarget.dataset.id;
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    });
  },

  deleteLocation(e) {
    const locationId = e.currentTarget.dataset.id;
    
    wx.showModal({
      title: '确认删除？',
      success: (res) => {
        if (res.confirm) {
          const locations = this.data.locations.filter(l => l.id !== locationId);
          this.setData({ locations });
          
          wx.showToast({
            title: '已删除',
            icon: 'success'
          });
        }
      }
    });
  },

  goBack() {
    wx.navigateBack();
  }
});
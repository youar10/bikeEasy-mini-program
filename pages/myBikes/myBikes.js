Page({
  data: {
    bikes: [
      {
        id: 'bike_001',
        brand: 'Giant Escape 3',
        serialNumber: 'BK-2023-8821',
        color: '黑色',
        status: 'normal',
        registeredAt: '2023-10-15',
        qrCode: 'https://example.com/qr/bike_001'
      },
      {
        id: 'bike_002',
        brand: 'Trek FX 3',
        serialNumber: 'BK-2023-9932',
        color: '白色',
        status: 'normal',
        registeredAt: '2023-11-20',
        qrCode: 'https://example.com/qr/bike_002'
      }
    ]
  },

  onLoad() {
    this.getMyBikes();
  },

  getMyBikes() {
    // 从服务器获取用户的单车列表
    console.log('获取我的单车列表');
  },

  goToScan() {
    wx.navigateTo({
      url: '/pages/scan/scan'
    });
  },

  viewQRCode(e) {
    const bikeId = e.currentTarget.dataset.id;
    const bike = this.data.bikes.find(b => b.id === bikeId);
    
    if (bike) {
      wx.navigateTo({
        url: `/pages/myBikes/myBikes?bikeId=${bikeId}`,
        success: () => {
          wx.showModal({
            title: '单车二维码',
            content: `${bike.brand}\n${bike.serialNumber}`,
            showCancel: false
          });
        }
      });
    }
  },

  editBike(e) {
    const bikeId = e.currentTarget.dataset.id;
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    });
  },

  deleteBike(e) {
    const bikeId = e.currentTarget.dataset.id;
    
    wx.showModal({
      title: '确认删除？',
      content: '删除后无法恢复，请确认',
      success: (res) => {
        if (res.confirm) {
          const bikes = this.data.bikes.filter(b => b.id !== bikeId);
          this.setData({ bikes });
          
          wx.showToast({
            title: '已删除',
            icon: 'success'
          });
        }
      }
    });
  }
});
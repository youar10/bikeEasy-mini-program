Page({
  data: {
    activeFilter: 'all',
    shops: [
      {
        id: 1,
        name: '中环单车工坊',
        type: 'repair',
        distance: 300,
        address: '中环海滨',
        phone: '+852 1234 5678',
        workingHours: '10:00-22:00',
        rating: 4.8,
        latitude: 22.2833,
        longitude: 114.1667
      },
      {
        id: 2,
        name: '维多利亚公园自行车店',
        type: 'shop',
        distance: 150,
        address: '民光街近3号码头',
        phone: '+852 2345 6789',
        workingHours: '09:00-21:00',
        rating: 4.5,
        latitude: 22.3193,
        longitude: 114.1733
      },
      {
        id: 3,
        name: '沙田自行车维修中心',
        type: 'repair',
        distance: 500,
        address: '新界沙田',
        phone: '+852 3456 7890',
        workingHours: '10:00-20:00',
        rating: 4.6,
        latitude: 22.3968,
        longitude: 114.1856
      }
    ],
    filteredShops: []
  },

  onLoad() {
    this.filterShops();
  },

  filterShops(e) {
    const filter = e ? e.currentTarget.dataset.filter : 'all';
    const filtered = filter === 'all' 
      ? this.data.shops 
      : this.data.shops.filter(shop => shop.type === filter);

    this.setData({
      activeFilter: filter,
      filteredShops: filtered
    });
  },

  callShop(e) {
    const phone = e.currentTarget.dataset.phone;
    wx.makePhoneCall({
      phoneNumber: phone
    });
  },

  navigateToShop(e) {
    const lat = e.currentTarget.dataset.lat;
    const lng = e.currentTarget.dataset.lng;
    
    wx.openLocation({
      latitude: parseFloat(lat),
      longitude: parseFloat(lng),
      name: '商家位置'
    });
  }
});
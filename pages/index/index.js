import {
  findNearbyParkingLocations,
  findNearbyBikePaths,
  calculateDistance,
  PARKING_LOCATIONS,
  BIKE_PATHS
} from '../../utils/bikeData.js';

Page({
  data: {
    latitude: 22.3193,
    longitude: 114.1733,
    scale: 16,
    startLocation: '维多利亚公园',
    endLocation: '中环',

    // 附近的泊车位
    nearbyParkings: [],
    // 附近的单车径
    nearbyPaths: [],
    // 当前选中的泊车位
    selectedLocation: null,
    // 当前选中的单车径
    selectedPath: null,

    // 显示标签（parking 或 path）
    activeMarkerType: 'parking',

    // 地图标记
    markers: [],

    // 加载状态
    isLoading: false,
    loadingText: '加载中...'
  },

  onLoad() {
    console.log('首页加载，获取位置...');
    this.getCurrentLocation();
  },

  onShow() {
    // 每次显示页面时刷新数据
    this.loadNearbyData(this.data.latitude, this.data.longitude);
  },

  /**
   * 获取用户位置并加载附近数据
   */
  getCurrentLocation() {
    this.setData({ isLoading: true, loadingText: '获取位置中...' });

    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        console.log('获取位置成功:', res);

        this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          loadingText: '加载数据中...'
        });

        // 获取附近的泊车位和单车径
        this.loadNearbyData(res.latitude, res.longitude);
      },
      fail: (error) => {
        console.error('获取位置失败:', error);

        // 如果获取位置失败，使用默认位置（维多利亚公园）
        wx.showToast({
          title: '使用默认位置',
          icon: 'none'
        });

        this.loadNearbyData(this.data.latitude, this.data.longitude);
      },
      complete: () => {
        this.setData({ isLoading: false });
      }
    });
  },

  /**
   * 加载附近的泊车位和单车径
   */
  loadNearbyData(userLat, userLng) {
    try {
      // 查找附近的泊车位（5公里范围内）
      const parkings = findNearbyParkingLocations(userLat, userLng, 5000);

      // 查找附近的单车径（10公里范围内）
      const paths = findNearbyBikePaths(userLat, userLng, 10000);

      console.log(`找到 ${parkings.length} 个附近停车位，${paths.length} 条单车径`);

      this.setData({
        nearbyParkings: parkings,
        nearbyPaths: paths
      });

      // 更新地图标记
      this.updateMapMarkers(parkings, paths);

      // 自动选中最近的泊车位
      if (parkings.length > 0) {
        this.selectParking(parkings[0]);
      }
    } catch (error) {
      console.error('加载数据错误:', error);
      wx.showToast({
        title: '加载数据失败',
        icon: 'none'
      });
    }
  },

  /**
   * 更新地图上的标记
   */
  updateMapMarkers(parkings, paths) {
    const markers = [];

    // 添加泊车位标记
    parkings.slice(0, 20).forEach((parking, index) => {
      markers.push({
        id: parking.id,
        latitude: parking.latitude,
        longitude: parking.longitude,
        title: parking.name,
        iconPath: '/assets/images/marker-parking.png',
        width: 32,
        height: 40,
        zIndex: 1
      });
    });

    // 添加单车径标记（只显示起点）
    paths.slice(0, 10).forEach((path, index) => {
      markers.push({
        id: path.id,
        latitude: path.startLat,
        longitude: path.startLng,
        title: path.name,
        iconPath: '/assets/images/marker-path.png',
        width: 32,
        height: 40,
        zIndex: 0
      });
    });

    console.log(`更新地图标记: ${markers.length} 个`);
    this.setData({ markers });
  },

  /**
   * 点击地图标记
   */
  onMarkerTap(e) {
    const markerId = e.detail.markerId;
    console.log('点击标记:', markerId);

    // 查找是泊车位还是单车径
    const parking = this.data.nearbyParkings.find(p => p.id === markerId);
    const path = this.data.nearbyPaths.find(p => p.id === markerId);

    if (parking) {
      this.selectParking(parking);
      this.setData({ activeMarkerType: 'parking' });
    } else if (path) {
      this.selectPath(path);
      this.setData({ activeMarkerType: 'path' });
    }
  },

  /**
   * 选择泊车位
   */
  selectParking(parking) {
    this.setData({
      selectedLocation: parking,
      selectedPath: null,
      activeMarkerType: 'parking'
    });

    // 移动地图中心到该位置
    this.mapContext = wx.createMapContext('map');
    this.mapContext.moveToLocation({
      latitude: parking.latitude,
      longitude: parking.longitude
    });
  },

  /**
   * 选择单车径
   */
  selectPath(path) {
    this.setData({
      selectedLocation: null,
      selectedPath: path,
      activeMarkerType: 'path'
    });

    // 移动地图中心到起点
    this.mapContext = wx.createMapContext('map');
    this.mapContext.moveToLocation({
      latitude: path.startLat,
      longitude: path.startLng
    });
  },

  /**
   * 切换显示泊车位或单车径
   */
  toggleMarkerType() {
    const newType = this.data.activeMarkerType === 'parking' ? 'path' : 'parking';
    this.setData({ activeMarkerType: newType });
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

  swapLocations() {
    const temp = this.data.startLocation;
    this.setData({
      startLocation: this.data.endLocation,
      endLocation: temp
    });
  },

  zoomIn() {
    const scale = Math.min(this.data.scale + 1, 20);
    this.setData({ scale });
  },

  zoomOut() {
    const scale = Math.max(this.data.scale - 1, 5);
    this.setData({ scale });
  },

  /**
   * 导航到泊车位或单车径起点
   */
  navigateTo() {
    const location = this.data.selectedLocation;
    const path = this.data.selectedPath;

    if (location) {
      wx.openLocation({
        latitude: location.latitude,
        longitude: location.longitude,
        name: location.name,
        address: location.address,
        success: () => {
          console.log('导航成功');
        },
        fail: () => {
          wx.showToast({
            title: '打开地图失败',
            icon: 'none'
          });
        }
      });
    } else if (path) {
      wx.openLocation({
        latitude: path.startLat,
        longitude: path.startLng,
        name: path.name,
        address: path.startPoint,
        success: () => {
          console.log('导航成功');
        },
        fail: () => {
          wx.showToast({
            title: '打开地图失败',
            icon: 'none'
          });
        }
      });
    }
  },

  goToReport() {
    wx.navigateTo({
      url: '/pages/report/report'
    });
  }
});

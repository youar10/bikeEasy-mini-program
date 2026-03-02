// utils/bikeData.js
// 单车泊车位和单车径完整数据库
// 包含香港主要停车点和自行车路线信息

/**
 * 单车泊车位数据
 * 包含：ID、名称、经纬度、容量、当前可用数量等
 */
export const PARKING_LOCATIONS = [
  {
    id: 'parking_001',
    name: '维多利亚公园停车点',
    latitude: 22.3193,
    longitude: 114.1733,
    address: '民光街近3号码头',
    type: 'parking',
    capacity: 20,
    available: 12,
    hasMonitoring: true,
    workingHours: '24小时',
    amenities: ['充电', '维修工具', '防盗锁'],
    rating: 4.8,
    reviews: 156
  },
  {
    id: 'parking_002',
    name: '中环码头停车点',
    latitude: 22.2833,
    longitude: 114.1667,
    address: '中环海滨',
    type: 'parking',
    capacity: 30,
    available: 18,
    hasMonitoring: true,
    workingHours: '24小时',
    amenities: ['充电', '防盗锁'],
    rating: 4.5,
    reviews: 89
  },
  {
    id: 'parking_003',
    name: '沙田新城市广场停车点',
    latitude: 22.3968,
    longitude: 114.1856,
    address: '新界沙田源禾路',
    type: 'parking',
    capacity: 25,
    available: 8,
    hasMonitoring: true,
    workingHours: '06:00-23:00',
    amenities: ['防盗锁'],
    rating: 4.2,
    reviews: 45
  },
  {
    id: 'parking_004',
    name: '尖沙咀星光大道停车点',
    latitude: 22.2957,
    longitude: 114.1728,
    address: '尖沙咀海滨',
    type: 'parking',
    capacity: 40,
    available: 25,
    hasMonitoring: true,
    workingHours: '24小时',
    amenities: ['充电', '维修工具', '防盗锁', '洗车服务'],
    rating: 4.7,
    reviews: 203
  },
  {
    id: 'parking_005',
    name: '旺角行人专用区停车点',
    latitude: 22.2967,
    longitude: 114.1681,
    address: '旺角道路段',
    type: 'parking',
    capacity: 15,
    available: 3,
    hasMonitoring: true,
    workingHours: '08:00-22:00',
    amenities: ['防盗锁'],
    rating: 4.3,
    reviews: 67
  },
  {
    id: 'parking_006',
    name: '铜锣湾时代广场停车点',
    latitude: 22.2775,
    longitude: 114.1839,
    address: '铜锣湾崇光百货附近',
    type: 'parking',
    capacity: 35,
    available: 20,
    hasMonitoring: true,
    workingHours: '24小时',
    amenities: ['充电', '防盗锁', '监控'],
    rating: 4.6,
    reviews: 178
  },
  {
    id: 'parking_007',
    name: '荃湾海滨公园停车点',
    latitude: 22.3126,
    longitude: 114.1084,
    address: '荃湾海滨',
    type: 'parking',
    capacity: 28,
    available: 14,
    hasMonitoring: true,
    workingHours: '06:00-22:00',
    amenities: ['防盗锁', '充电'],
    rating: 4.4,
    reviews: 92
  },
  {
    id: 'parking_008',
    name: '屯门蓝地停车点',
    latitude: 22.4169,
    longitude: 113.9737,
    address: '屯门蓝地',
    type: 'parking',
    capacity: 22,
    available: 9,
    hasMonitoring: false,
    workingHours: '07:00-21:00',
    amenities: ['基础设施'],
    rating: 4.1,
    reviews: 34
  }
];

/**
 * 单车径数据
 * 包含：ID、名称、起点、终点、难度、长度、经纬度等
 */
export const BIKE_PATHS = [
  {
    id: 'path_001',
    name: '维多利亚公园绿道',
    startPoint: '维多利亚公园北门',
    endPoint: '维多利亚公园南门',
    startLat: 22.3220,
    startLng: 114.1750,
    endLat: 22.3170,
    endLng: 114.1720,
    difficulty: '简单',
    distance: 2.5,
    estimatedTime: 15,
    description: '公园内的平坦绿道，适合初学者，景色优美',
    condition: '路况良好',
    type: 'park',
    rating: 4.9,
    reviews: 342
  },
  {
    id: 'path_002',
    name: '维港滨水骑行道',
    startPoint: '中环海滨',
    endPoint: '尖沙咀海滨',
    startLat: 22.2833,
    startLng: 114.1667,
    endLat: 22.2957,
    endLng: 114.1728,
    difficulty: '简单',
    distance: 3.2,
    estimatedTime: 20,
    description: '沿维多利亚港的滨水步道，景色优美，非常热门',
    condition: '路况良好',
    type: '滨水',
    rating: 4.8,
    reviews: 501
  },
  {
    id: 'path_003',
    name: '沙田新城市绿道',
    startPoint: '沙田市中心',
    endPoint: '沙田海滨公园',
    startLat: 22.3968,
    startLng: 114.1856,
    endLat: 22.4020,
    endLng: 114.1950,
    difficulty: '中等',
    distance: 4.8,
    estimatedTime: 35,
    description: '经过新城市的绿道，路况一般，适合中级骑手',
    condition: '路况一般',
    type: '城市',
    rating: 4.1,
    reviews: 178
  },
  {
    id: 'path_004',
    name: '麦理浩径第一段',
    startPoint: '南港岛东',
    endPoint: '赤柱峡',
    startLat: 22.2456,
    startLng: 114.1789,
    endLat: 22.2289,
    endLng: 114.1667,
    difficulty: '困难',
    distance: 10.5,
    estimatedTime: 90,
    description: '山地骑行，路况复杂，需要专业技能和装备',
    condition: '路况复杂',
    type: '山地',
    rating: 4.6,
    reviews: 92
  },
  {
    id: 'path_005',
    name: '荃湾至汀九绿道',
    startPoint: '荃湾海滨',
    endPoint: '汀九跨境大桥',
    startLat: 22.3126,
    startLng: 114.1084,
    endLat: 22.3185,
    endLng: 114.0953,
    difficulty: '中等',
    distance: 6.2,
    estimatedTime: 45,
    description: '沿西部滨水区的绿道，风景不错',
    condition: '路况良好',
    type: '滨水',
    rating: 4.4,
    reviews: 134
  },
  {
    id: 'path_006',
    name: '九龙湖环湖骑行道',
    startPoint: '九龙湖南门',
    endPoint: '九龙湖北门',
    startLat: 22.2556,
    startLng: 114.2089,
    endLat: 22.2689,
    endLng: 114.2134,
    difficulty: '简单',
    distance: 3.8,
    estimatedTime: 25,
    description: '环绕九龙湖的平坦路线，景色优美，适合家庭',
    condition: '路况良好',
    type: 'park',
    rating: 4.7,
    reviews: 267
  },
  {
    id: 'path_007',
    name: '屯门至荃湾海滨长廊',
    startPoint: '屯门海滨公园',
    endPoint: '荃湾海滨',
    startLat: 22.4169,
    startLng: 113.9737,
    endLat: 22.3126,
    endLng: 114.1084,
    difficulty: '中等',
    distance: 8.5,
    estimatedTime: 60,
    description: '沿西部海滨的长距离路线，风景优美，适合长途骑行',
    condition: '路况良好',
    type: '滨水',
    rating: 4.5,
    reviews: 198
  },
  {
    id: 'path_008',
    name: '铜锣湾至跑马地骑行路线',
    startPoint: '铜锣湾时代广场',
    endPoint: '跑马地体育中心',
    startLat: 22.2775,
    startLng: 114.1839,
    endLat: 22.2700,
    endLng: 114.1794,
    difficulty: '简单',
    distance: 1.8,
    estimatedTime: 12,
    description: '城市短途路线，适合上班族',
    condition: '路况良好',
    type: '城市',
    rating: 4.3,
    reviews: 156
  }
];

/**
 * 计算两点之间的距离 (单位：米)
 * 使用 Haversine 公式
 */
export function calculateDistance(lat1, lng1, lat2, lng2) {
  const R = 6371000; // 地球半径（米）
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLng = (lng2 - lng1) * (Math.PI / 180);

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return Math.round(distance);
}

/**
 * 根据用户位置查找附近的泊车位
 * @param {number} userLat - 用户纬度
 * @param {number} userLng - 用户经度
 * @param {number} radius - 搜索半径（米），默认5000米
 * @returns {array} 附近泊车位列表（按距离排序）
 */
export function findNearbyParkingLocations(userLat, userLng, radius = 5000) {
  const nearby = PARKING_LOCATIONS.map(location => {
    const distance = calculateDistance(userLat, userLng, location.latitude, location.longitude);
    return {
      ...location,
      distance,
      walkTime: Math.ceil(distance / 1.4 / 60)
    };
  }).filter(location => location.distance <= radius)
    .sort((a, b) => a.distance - b.distance);

  return nearby;
}

/**
 * 根据用户位置查找附近的单车径
 * @param {number} userLat - 用户纬度
 * @param {number} userLng - 用户经度
 * @param {number} radius - 搜索半径（米），默认10000米
 * @returns {array} 附近单车径列表（按距离排序）
 */
export function findNearbyBikePaths(userLat, userLng, radius = 10000) {
  const nearby = BIKE_PATHS.map(path => {
    const distanceToStart = calculateDistance(userLat, userLng, path.startLat, path.startLng);
    return {
      ...path,
      distanceToStart,
      timeToStart: Math.ceil(distanceToStart / 5 / 60)
    };
  }).filter(path => path.distanceToStart <= radius)
    .sort((a, b) => a.distanceToStart - b.distanceToStart);

  return nearby;
}

/**
 * 根据类型过滤泊车位
 */
export function filterParkingByType(type) {
  return PARKING_LOCATIONS.filter(location => location.type === type);
}

/**
 * 根据难度过滤单车径
 */
export function filterPathsByDifficulty(difficulty) {
  return BIKE_PATHS.filter(path => path.difficulty === difficulty);
}

/**
 * 根据类型过滤单车径
 */
export function filterPathsByType(type) {
  return BIKE_PATHS.filter(path => path.type === type);
}

/**
 * 获取单个泊车位详情
 */
export function getParkingLocationById(id) {
  return PARKING_LOCATIONS.find(location => location.id === id);
}

/**
 * 获取单个单车径详情
 */
export function getBikePathById(id) {
  return BIKE_PATHS.find(path => path.id === id);
}

/**
 * 搜索泊车位（按名称或地址）
 */
export function searchParkingLocations(keyword) {
  const lowerKeyword = keyword.toLowerCase();
  return PARKING_LOCATIONS.filter(location =>
    location.name.toLowerCase().includes(lowerKeyword) ||
    location.address.toLowerCase().includes(lowerKeyword)
  );
}

/**
 * 搜索单车径（按名称）
 */
export function searchBikePaths(keyword) {
  const lowerKeyword = keyword.toLowerCase();
  return BIKE_PATHS.filter(path =>
    path.name.toLowerCase().includes(lowerKeyword) ||
    path.description.toLowerCase().includes(lowerKeyword)
  );
}

/**
 * 获取统计数据
 */
export function getStatistics() {
  return {
    totalParkings: PARKING_LOCATIONS.length,
    totalPaths: BIKE_PATHS.length,
    averageParkingCapacity: Math.round(
      PARKING_LOCATIONS.reduce((sum, p) => sum + p.capacity, 0) / PARKING_LOCATIONS.length
    ),
    averagePathDistance: (
      BIKE_PATHS.reduce((sum, p) => sum + p.distance, 0) / BIKE_PATHS.length
    ).toFixed(1)
  };
}

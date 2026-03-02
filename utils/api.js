// API 请求工具

const BASE_URL = 'https://api.bikeasy.example.com';

/**
 * 发送请求
 */
function request(url, method = 'GET', data = {}) {
  return new Promise((resolve, reject) => {
    const token = wx.getStorageSync('auth_token');
    
    wx.request({
      url: `${BASE_URL}${url}`,
      method,
      data,
      header: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : ''
      },
      success: (res) => {
        if (res.data.code === 0) {
          resolve(res.data.data);
        } else {
          reject(new Error(res.data.message || '请求失败'));
        }
      },
      fail: (error) => {
        reject(error);
      }
    });
  });
}

/**
 * GET 请求
 */
export function get(url) {
  return request(url, 'GET');
}

/**
 * POST 请求
 */
export function post(url, data) {
  return request(url, 'POST', data);
}

/**
 * PUT 请求
 */
export function put(url, data) {
  return request(url, 'PUT', data);
}

/**
 * DELETE 请求
 */
export function del(url) {
  return request(url, 'DELETE');
}

/**
 * 获取登录 token
 */
export function getToken() {
  return wx.getStorageSync('auth_token');
}

/**
 * 保存 token
 */
export function saveToken(token) {
  wx.setStorageSync('auth_token', token);
}

/**
 * 清除 token
 */
export function clearToken() {
  wx.removeStorageSync('auth_token');
}
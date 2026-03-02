Page({
  data: {
    phone: '',
    code: '',
    isLoading: false
  },

  onPhoneChange(e) {
    this.setData({
      phone: e.detail.value
    });
  },

  onCodeChange(e) {
    this.setData({
      code: e.detail.value
    });
  },

  sendCode() {
    if (!this.data.phone) {
      wx.showToast({
        title: '请输入电话号码',
        icon: 'none'
      });
      return;
    }

    wx.showToast({
      title: '验证码已发送',
      icon: 'success'
    });
  },

  login() {
    const { phone, code } = this.data;

    if (!phone || !code) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none'
      });
      return;
    }

    this.setData({ isLoading: true });

    setTimeout(() => {
      wx.setStorageSync('auth_token', 'token_123');
      wx.setStorageSync('userInfo', { phone, name: '用户' });
      
      this.setData({ isLoading: false });
      
      wx.switchTab({
        url: '/pages/index/index'
      });
    }, 1000);
  }
});
Page({
  data: {
    currentStep: 0,
    steps: [
      {
        title: '地图查询',
        description: '轻松寻找周邊单车徑與合法泊車位，隨時掌握路線資訊。',
        emoji: '🗺️'
      },
      {
        title: '单车专属码',
        description: '扫描专属二维码，即时掌握单车详情与维修记录。',
        emoji: '📱'
      },
      {
        title: '投诉举报',
        description: '共同维护市容，快速举报违规停泊或损坏废弃单车。',
        emoji: '📢'
      },
      {
        title: '附近商家资讯',
        description: '探索周邊維修站與單車生活館，享受一站式單車服務。',
        emoji: '🏪'
      }
    ]
  },

  nextStep() {
    const { currentStep, steps } = this.data;
    if (currentStep < steps.length - 1) {
      this.setData({
        currentStep: currentStep + 1
      });
    } else {
      wx.navigateTo({
        url: '/pages/login/login'
      });
    }
  },

  skipOnboarding() {
    wx.navigateTo({
      url: '/pages/login/login'
    });
  }
});
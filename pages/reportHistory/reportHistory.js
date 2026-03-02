Page({
  data: {
    statusFilter: 'all',
    reports: [
      {
        id: 'report_001',
        reportNumber: 'RE-20240301-001',
        type: 'illegal_parking',
        typeText: '违规停泊',
        status: 'processing',
        location: '新界沙田源禾路附近',
        description: '单车停在入口，阻碍通道',
        createdAt: '2024-03-01 14:30',
        image: 'https://example.com/report1.jpg'
      },
      {
        id: 'report_002',
        reportNumber: 'RE-20240228-005',
        type: 'damaged',
        typeText: '车辆损坏',
        status: 'completed',
        location: '维多利亚公园',
        description: '前轮爆胎，无法使用',
        createdAt: '2024-02-28 10:15',
        image: 'https://example.com/report2.jpg'
      },
      {
        id: 'report_003',
        reportNumber: 'RE-20240227-003',
        type: 'other',
        typeText: '其他问题',
        status: 'completed',
        location: '中环海滨',
        description: '单车上有垃圾',
        createdAt: '2024-02-27 16:45',
        image: 'https://example.com/report3.jpg'
      }
    ],
    filteredReports: []
  },

  onLoad() {
    this.filterByStatus();
  },

  filterByStatus(e) {
    const status = e ? e.currentTarget.dataset.status : 'all';
    const filtered = status === 'all' 
      ? this.data.reports 
      : this.data.reports.filter(r => r.status === status);

    this.setData({
      statusFilter: status,
      filteredReports: filtered
    });
  },

  viewDetails(e) {
    const reportId = e.currentTarget.dataset.id;
    const report = this.data.reports.find(r => r.id === reportId);

    if (report) {
      wx.showModal({
        title: report.reportNumber,
        content: `类型: ${report.typeText}\n位置: ${report.location}\n状态: ${report.status === 'processing' ? '处理中' : '已完成'}\n\n${report.description}`,
        showCancel: false,
        confirmText: '关闭'
      });
    }
  },

  goBack() {
    wx.navigateBack();
  }
});
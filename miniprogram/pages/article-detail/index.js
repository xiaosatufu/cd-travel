// miniprogram/pages/article-detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log(options)
    wx.cloud.init({
      env: 'cd-travel-de6a49'
    })
    const db = wx.cloud.database({
      env: 'cd-travel-de6a49'
    })
    // console.log(db)

    // const article = db.collection('article')
    // console.log(article)

    db.collection('cd-metro-food').get().then(res => {
      // res.data 包含该记录的数据
      // console.log(res)

      this.setData({
        data: res.data
      })
      console.log(this.data.data)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
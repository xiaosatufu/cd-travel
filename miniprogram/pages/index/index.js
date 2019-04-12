wx.cloud.init({
  env:'cd-travel-de6a49'
})
const db = wx.cloud.database({
  env:'cd-travel-de6a49'
})
// console.log(db)

// const article = db.collection('article')
// console.log(article)

// db.collection('article').get().then(res => {
//   // res.data 包含该记录的数据
//   console.log(res)
// })



Page({
  data: {
    PageCur: 'basics'
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  handleJumpDetail() {
    wx.navigateTo({
      url: '/pages/article-detail/index?articleid=10'
    })
  },
  onLoad() {
    wx.cloud.callFunction({
      // 云函数名称
      name: 'add',
      // 传给云函数的参数
      data: {
        a: 1,
        b: 2,
      },
      success(res) {
        console.log(res.result) // 3
      },
      fail: console.error
    })
  }
})
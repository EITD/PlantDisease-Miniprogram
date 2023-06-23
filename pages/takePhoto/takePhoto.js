const app = getApp()

Page({
  data: {
    addText: '添加图片',
    imageUrl: '',
    result: []
  },

  onShow() {
    if (app.globalData.imgSrc) {
        this.setData({
            addText: '更改图片',
            imageUrl: app.globalData.imgSrc
        })
        this.upload()
    }
  },

  chooseImage() {
    wx.navigateTo({
      url: `../cropper/cropper?imgSrc=${this.data.imageUrl}`
    })
  },
  upload() {
    wx.showLoading({
      title: '检测中'
    })
    let that = this
    wx.uploadFile({
      filePath: this.data.imageUrl,
      name: 'images',
      url: 'http://127.0.0.1:5000/images',
      success(res) {
        that.setData({
          result: JSON.parse(res.data).result_data
        })
        wx.hideLoading({})
      }
    })
  },
  goToDetail:function(e) {
    wx.navigateTo({
      url: `../detail/detail?title=${e.currentTarget.dataset.title}&image=${this.data.imageUrl}`
    })
  }
})
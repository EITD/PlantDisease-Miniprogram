const app = getApp()

Page({
  data: {
    plants:[
      {"title": "草莓叶焦", "image": "../../images/Strawberry___Leaf_scorc.JPG"},
      {"title": "马铃薯早枯", "image": "../../images/Tomato___Early_blight.JPG"},
      {"title": "桃子细菌性斑点", "image": "../../images/Peach___Bacterial_spot.JPG"},
      {"title": "胡椒细菌性斑点", "image": "../../images/Pepper,_bell___Bacterial_spot.JPG"},
      {"title": "葡萄叶枯病", "image": "../../images/Grape___Leaf_blight_(Isariopsis_Leaf_Spot).JPG"},
      {"title": "玉米灰斑病", "image": "../../images/Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spo.JPG"},
      {"title": "马铃薯黄卷叶病毒", "image": "../../images/Tomato___Tomato_Yellow_Leaf_Curl_Virus.JPG"},
      {"title": "南瓜白粉病", "image": "../../images/Squash___Powdery_mildew.JPG"},
      {"title": "樱桃白粉病", "image": "../../images/Cherry_(including_sour)___Powdery_mildew.JPG"}
    ]
  },

  goToDetail:function(e) {
    wx.navigateTo({
      url: `../detail/detail?title=${e.currentTarget.dataset.title}&image=${"default"}`
    })
  }
})
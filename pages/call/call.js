// pages/call/call.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    telNumber: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.tel = []
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  tel: [],
  operateTel: function (newNum) {
    let newTel = '';
    console.log(newTel)
    if (newNum) {
      this.tel.length<12?this.tel.push(newNum):''
      newTel = this.tel.join('')
    } else {
      this.tel.pop()
      newTel = this.tel.join('')
    }

    this.setData({
      telNumber: newTel
    })
  },
  clickKeybord: function (e) {
    console.log(e.target.id)
    switch (e.target.id) {
      case 'key1':
        this.operateTel('1')
        break;
      case 'key2':
        this.operateTel('2')
        break;
      case 'key3':
        this.operateTel('3')
        break;
      case 'key4':
        this.operateTel('4')
        break;
      case 'key5':
        this.operateTel('5')
        break;
      case 'key6':
        this.operateTel('6')
        break;
      case 'key7':
        this.operateTel('7')
        break;
      case 'key8':
        this.operateTel('8')
        break;
      case 'key9':
        this.operateTel('9')
        break;
      case 'key10':
        this.operateTel('*')
        break;
      case 'key11':
        this.operateTel('0')
        break;
      case 'key12':
        this.operateTel()
        break;
    }
  }

})
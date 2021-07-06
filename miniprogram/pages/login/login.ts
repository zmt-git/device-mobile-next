import { login } from '../../api/login/index'
import { sHandler } from '../../handler/requestHandler'

Page({
  data: {
    password: '',
    username: '',
    form: {
      uuid: '',
      type: 1
    },
    disabled: true
  },

  onShow () {
    wx.hideHomeButton()
    const app = getApp()

    app.globalData.socket && app.globalData.socket.socket.close()
  },

  onChange () {
    if (!this.data.password || !this.data.username) {
      this.setData({ disabled: true })
    } else {
      this.setData({ disabled: false })
    }
  },

  submit () {
    const _this = this
    wx.showLoading({ title: '登录中...'})
    wx.login({
      async success(res) {
        _this.setData({
          'form.uuid': res.code
        })
        await login({..._this.data.form, username: _this.data.username, password: _this.data.password})
          .then(res => {
            sHandler(res)
          })
          .catch(e => {
            console.log(e)
          })
        wx.hideLoading()
      },
      fail(e) {
        console.log(e)
      }
    })
  }
})
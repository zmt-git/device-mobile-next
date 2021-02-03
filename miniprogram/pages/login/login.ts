import { login } from '../../api/login/index'
import { sHandler } from '../../handler/requestHandler'

const reg: RegObj = {
  username: /\S/,
  password: /\S/
}

Page({
  data: {
    form: {
      password: '',
      username: '',
      uuid: '',
      type: 1
    },
    usernameMsgShow: false, 
    passwordMsgShow: false,
    disabled: true
  },

  onShow () {
    wx.hideHomeButton()
    const app = getApp()

    app.globalData.socket && app.globalData.socket.socket.close()
  },

  setDisabled () {
    let result = true
    if (reg.username.test(this.data.form.username)
     && reg.password.test(this.data.form.password)
    ) {
      result = false
    } else {
      result = true
    }
    this.setData({
      disabled: result
    })
  },

  bindinput (e: any) {
    const key: 'password' | 'username' = e.target.id
    const keys = `form.${key}`
    this.setData({
      [keys]: e.detail.value
    })

    this.setData({
      [`${key}MsgShow`]: !reg[key].test(this.data.form[key])
    })

    this.setDisabled()
  },

  submit () {
    const _this = this
    wx.showLoading({ title: '登录中...'})
    wx.login({
      async success(res) {
        _this.setData({
          'form.uuid': res.code
        })
        await login(_this.data.form)
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
import { HTTPSSETTING } from '../../settings/httpsSetting'
import { formateParams, getData } from './httpUtil'
import { errorHandler } from '../../handler/requestHandler'
import { getToken } from '../auth/auth'

const header = {
  "Content-Type": "application/json",
  'token': getToken()
}

const request = (opt: RequestOpt) => {
  let params: string = ''

  if ('params' in opt) {
    params = formateParams(opt.params)
  }

  opt.url = opt.url + params

  if ('data' in opt) {
    opt.data = getData(opt.data)
  }

  header.token = getToken()

  return new Promise((resolve, reject) => {
    wx.request({
      url: HTTPSSETTING.requestUrl + opt.url,
      data: opt.data,
      method: opt.method,
      header: header,
      dataType: 'json',
      success: function (res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data)
        } else {
          errorHandler(res)
          reject(res)
        }
      },

      fail: function (e) {
        reject(e)
      },

      complete: function () {
        wx.hideLoading()
        wx.stopPullDownRefresh()
      }
    })
  })
}

export default request

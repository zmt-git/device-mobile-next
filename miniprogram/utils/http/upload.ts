import { HTTPSSETTING } from '../../settings/httpsSetting'
import { getData } from './httpUtil'
import { getToken } from '../auth/auth'
import { errorHandler } from '../../handler/requestHandler'
const header = {
  "Content-Type": "application/json",
  'token': getToken()
}

const upload = (opt: UploadOpt) => {
	opt.files = opt.files || []

	if (opt.formData) {
		opt.formData = getData(opt.formData)
	}

  opt.filePath = opt.filePath
  
  if (!getToken()) {
    wx.navigateTo({
      url: '../../pages/login/login'
    })
    return Promise.reject('token error')
  }

  header.token = getToken()


	return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: HTTPSSETTING.requestUrl,
      filePath: opt.filePath,
      name: opt.name,
      formData: opt.formData,
      header: header,
      success: function (res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res)
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
export default upload

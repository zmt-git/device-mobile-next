import { loginCode } from '../api/login/index'
import { setToken, removeToken } from '../utils/auth/auth'
import Socket from '../utils/http/ws'
import { getGlobalData, setGlobalData } from '../utils/app/app'
import router, { RouteType } from '../utils/router/index'

/**
 * @description 设置公共变量
 * @param isLogin 是否登录
 * @param isLogining 登录状态
 */
function setGlobalLoginData (isLogin: boolean = false, isLogining: boolean = false) {
  setGlobalData('isLogin', isLogin)
  setGlobalData('isLogining', isLogining)
}

/**
 * @description 错误处理
 */
export function eHandler () {
  setGlobalLoginData()
  removeToken()
  router.to(RouteType.RL, '/pages/login/login')
  getGlobalData('socket') && getGlobalData('socket').socket.close()
}

/**s
 * @description 登录成功处理
 */
export function sHandler (res: any) {
  setToken(res.result)
  setGlobalLoginData(true, false)
  setGlobalData('socket', new Socket())
  router.to(RouteType.ST, '/pages/index/index')
}

/**
 * @description 自动登录
 */
export function loginCodeHandler (successFn?: Function) {
  wx.showLoading({
    title: '登录中...'
  })
  wx.login({
    success: async function (res) {
      await loginCode({ uuid: res.code, type: 1 })
        .then((res: any) => {
          sHandler(res)
          successFn && successFn()
        })
        .catch(e => {
          console.log(e)
          eHandler()
        })
      wx.hideLoading()
    },

    fail: function (error) {
      console.log(error)
      wx.hideLoading()
      eHandler()
    }
  })
}

/**
 * @description 错误请求处理
 */
export function errorHandler (res: WechatMiniprogram.UploadFileSuccessCallbackResult |  WechatMiniprogram.RequestSuccessCallbackResult) {
  if (getGlobalData('isLogining')) return
	if (res.statusCode === 401) {
    setGlobalLoginData(false, true)
    loginCodeHandler()
	} else if (res.statusCode === 402) {
    eHandler()
	}
}

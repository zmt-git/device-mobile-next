import { HTTPSSETTING } from '../../settings/httpsSetting'
export function setToken (val: string, key:string = HTTPSSETTING.accessTokenKey) {
  wx.setStorageSync(key, val)
}

export function getToken (key: string = HTTPSSETTING.accessTokenKey): string {
  return wx.getStorageSync(key)
}

export function removeToken (key: string = HTTPSSETTING.accessTokenKey) {
  wx.removeStorageSync(key)
}
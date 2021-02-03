export function getAppInstance (): WechatMiniprogram.App.Instance<Record<string, any>> {
  return getApp()
}

export function getGlobalData (key: string): any {
  if (key) {
    return getAppInstance().globalData[key]
  }
  return getAppInstance().globalData
}

export function setGlobalData (key: string, val: any) {
  getAppInstance().globalData[key] = val
}
import { setupRouter } from './permission'

export enum RouteType {
  ST = 'switchTab',
  RL = 'reLaunch',
  RT = 'redirectTo',
  NT = 'navigateTo',
  NB = 'navigateBack'
}

interface BeforeEnterCallback {
  (to: string, from: string, next: Function) : void
}

interface RouteOption {
  url: string,
  success?: Function
  fail?: Function
  complete?: Function
}
    
class Router {
  private history: any[] = []

  private currentType: RouteType = RouteType.NT

  private currentRoute: RouteOption = { url: '/pages/index/index' }

  public type = RouteType

  constructor () {
    this.setHistory()
  }

  next (type = this.currentType, t = this.currentRoute) {
    wx[type]({
      url: t.url,
      success: () => { t.success && t.success() },
      fail: () => { t.fail && t.fail() },
      complete: () => { this.afterEnter() }
    })
  }

  beforeEnter (callback: BeforeEnterCallback) {
    this.callback = callback

    this.setHistory()

    const toUrl = this.currentRoute.url

    const fromUrl = this.getCurrentRouteUrl

    callback(toUrl, fromUrl, this.next.bind(this))
  }

  afterEnter () {
    this.setHistory()
  }

  // 获取页面栈
  get getHistory () {
    return this.history
  }

  get getCurrentRouteUrl (): string {
    if (this.history.length > 0) {
      return this.history[this.history.length - 1].route
    } else {
      return ''
    }
  }

  setHistory () {
    this.history = getCurrentPages()
  }

  constructRoute (route: RouteOption | string): RouteOption {
    let t: unknown
    if (typeof route === 'string') {
      t = { url: route }
    } else {
      t = route
    }
    return t as RouteOption
  }

  to (type: RouteType = RouteType.ST, route: RouteOption | string) {
    this.currentType = type

    this.currentRoute = this.constructRoute(route)

    this.beforeEnter(this.callback)
  }

  callback (to: string, from: string, next: Function) {
    console.debug(to, from)
    next()
  }
}

const router = new Router()

setupRouter(router)

export type RouterObj = Router

export default router
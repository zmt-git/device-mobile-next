/*
*单例模式*
*断线重连*
*超时提示*
*心跳保活*
*错误处理*
*发布订阅*
*/
import { HTTPSSETTING } from '../../settings/httpsSetting'
import { getToken } from '../auth/auth'
import { getSeq } from '../http/httpUtil'
import { EmitEnum } from '../event/eventEmitEnum'
import eventBus from '../event/eventBus'

interface SocketSendOpt {
  protVer: string
  modeNum: string
  sigNum: EmitEnum
  seq: number
  deviceCode: string
  body: any
}

const heartMsg: SocketSendOpt = { protVer: '1.0', modeNum: 'web', sigNum: EmitEnum.onheartMsg, seq: getSeq(), deviceCode: getToken(), body: null }

class Socket {
  private static _isConnect: boolean = false

  private static instance: Socket | null = null

  private readonly cachedUrl: string = ''

  private reconnectTimes: number = 0

  private maxReconnect: number = 10

  private heartbeatTime: number = 30000

  private heartbeatTimer: any = null

  private timeout: number = HTTPSSETTING.timeout

  private timeoutTimer: any = null

  private socket!: WechatMiniprogram.SocketTask

  get isConnect () {
    return Socket._isConnect
  }

  constructor () {
    if (Socket.instance) {
      return Socket.instance
    }

    this.cachedUrl = HTTPSSETTING.wsUrl

    Socket.instance = this

    this.socket = this.createWs()
  }

  createWs (): WechatMiniprogram.SocketTask {
    if (!getToken()) {
      throw new Error('token error')
    }
    const ws = wx.connectSocket({ url: `${this.cachedUrl}/?token=${getToken()}` })

    ws.onOpen(() => {
      console.log('ws onOpen')

      this.timeoutTimer && clearTimeout(this.timeoutTimer)

      this.reconnectTimes = 0

      Socket._isConnect = true

      this.heartbeat()
    })

    this.bindWsHooks(ws)

    return ws
  }

  bindWsHooks (ws: WechatMiniprogram.SocketTask) {
    ws.onMessage((evt: any) => {
      let jsonData : SocketSendOpt
      try {
        jsonData = JSON.parse(evt.data) as SocketSendOpt

        // console.log('onMessage')
        // console.log(jsonData)

        if (this.isHeartMsg(jsonData)) {
          this.heartbeat()
          return
        }
        eventBus.emit(jsonData.sigNum)

      } catch (e) {
        console.log(e)
      }
    })

    ws.onError(() => {
      console.log('ws onError')
      this.reset()
      this.reconnect()
    })

    ws.onClose(() => {
      console.log('ws onClose')
      this.reset()
    })
  }

  reset () {
    this.heartbeatTimer && clearTimeout(this.heartbeatTimer)
    this.timeoutTimer && clearTimeout(this.timeoutTimer)
    Socket._isConnect = false
    Socket.instance = null
  }

  heartbeat () {
    this.heartbeatTimer && clearTimeout(this.heartbeatTimer)
    this.timeoutTimer && clearTimeout(this.timeoutTimer)

    this.heartbeatTimer = setTimeout(() => {
      this.send(heartMsg)

      this.timeoutTimer = setTimeout(() => {
        this.socket.close({ reason: '未收到心跳回复消息' })

        this.reconnect()

        this.heartbeatTimer && clearTimeout(this.heartbeatTimer)

        this.timeoutTimer && clearTimeout(this.timeoutTimer)
      }, this.timeout)
    },this.heartbeatTime)
  }

  send (obj: SocketSendOpt) {
    // console.log('send')
    // console.log(heartMsg)
    this.socket.send({ data: JSON.stringify(obj)})
  }

  isHeartMsg (jsonData: any): boolean {
    if (jsonData.sigNum === '1') {
      return true
    } else {
      return false
    }
  }

  reconnect () {
    this.reconnectTimes++
    if (this.reconnectTimes > this.maxReconnect) {
      throw new Error('websocket重连失败， 请排查服务器是否正常运行')
      return
    }
    this.socket = this.createWs()
  }
}

export default Socket
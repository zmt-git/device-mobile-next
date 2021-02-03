import { EmitEnum } from './eventEmitEnum'

interface EventMap {
  [propName: string]: Function[]
}

class EventBus {
  private eventMap: EventMap = {}

  on (eventName: EmitEnum, callback: Function) {
    if (!this.eventMap[eventName]) {
      this.eventMap[eventName] = []
    }

    const cd = this.eventMap[eventName].find(cd => cd === callback)

    if (!cd) {
      this.eventMap[eventName].push(callback)
    }
  }

  emit (eventName: EmitEnum, ...arg: any[]) {
    const fnArr = this.eventMap[eventName]

    if (!fnArr || fnArr.length === 0) return

    fnArr.forEach(fn => {
      fn(...arg)
    })
  }

  off (eventName: EmitEnum, fn?: Function) {
    const fnArr = this.eventMap[eventName]

    if (!fnArr || fnArr.length === 0) return

    if (!fn) {
      this.eventMap[eventName] = []
      delete this.eventMap[eventName]
    } else {
      const index = this.eventMap[eventName].findIndex(cd => cd === fn)
      if (index >= 0) {
        this.eventMap[eventName].splice(index, 1)
      }
    }
  }
}

export default new EventBus()
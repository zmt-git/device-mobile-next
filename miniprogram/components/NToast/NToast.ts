import { bindComponent } from '../../handler/useToast'
Component({
  options: {
    multipleSlots: true,
    styleIsolation: 'apply-shared'
  },

  properties: {
    position: {
      type: String,
      value: 'top'
    },
    defaultIcon: {
      type: Boolean,
      value: true
    }
  },

  data: {
    message: '提示提示提示提示提示',
    type: 'primary',
    duration: 2000,
    icon: '',
    iconList: {
      success: 'icon-chenggong',
      danger: 'icon-shibai',
      default: 'icon-jinzhi',
      warning: 'icon-jinggao',
      primary: 'icon-yibanxiaoxitixing_Pro',
    },
    animationData: {},
    timeer: 0
  },

  created () {
    bindComponent(this)
  },

  methods: {
    setAnimation () {
      this.data.timeer && clearInterval(this.data.timeer)

      const animationData = wx.createAnimation({
        duration: 300,
        timingFunction: 'ease'
      })

      animationData.opacity(1).step()

      this.setData({
        animationData: animationData.export()
      })

      this.data.timeer = setTimeout(() => {
        animationData.opacity(0).step()
        this.setData({
          animationData: animationData.export()
        })
      }, this.data.duration);
    },

    show (opt: ShowOpt) {
      this.setData({
        message: opt.message,
        type: (opt.type || 'primary'),
        duration: (opt.duration || 2000),
        icon: (opt.icon || '')
      })

      this.setAnimation()
    }
  }
})
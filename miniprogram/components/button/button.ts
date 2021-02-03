Component({
  options: {
    multipleSlots: true,
    styleIsolation: 'apply-shared'
  },

  properties: {
    type: {
      value: 'success',
      type: String
    },

    size:  {
      value: 'default',
      type: String
    },

    disabled: {
      value: false,
      type: Boolean
    },

    loading: {
      value: false,
      type: Boolean
    },

    plain: {
      value: false,
      type: Boolean
    },

    breath: {
      value: false,
      type: Boolean
    },
    wave: {
      value: false,
      type: Boolean
    },

    hoverClass: {
      value: 'button-hover',
      type: String
    },

    openType: {
      value: '',
      type: String
    },

    radius: {
      value: '10rpx',
      type: String
    },

    className: {
      value: '',
      type: String
    }
  },

  observers: {
    'type, plain': function(type, plain) {
      // 在 numberA 或者 numberB 被设置时，执行这个函数
      if (plain) {
        this.setData({
          class: `${type}-plain`
        })
      }
    }
  },

  data: {
    class: '',
    isTouch: false
  },

  methods: {
    onTouch (e) {
      if (e.type === 'touchstart') {
        this.setData({
          isTouch: true
        })
      } else if (e.type === 'touchend') {
        this.setData({
          isTouch: false
        })
      }
    }
  }
})
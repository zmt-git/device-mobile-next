import { loginCodeHandler } from '../../handler/requestHandler'
import router from '../../utils/router/index'
import Pagination from '../../mixins/pagination'
import { getDeviceList } from '../../api/index/index'
import { showToast } from '../../handler/useToast'

Page({
  data: {
    list: [],
    pagination: {} as (Pagination | null),
    toast: {}
  },

  onLoad () {
    this.data.pagination = new Pagination({ request: getDeviceList })

    loginCodeHandler(() => {
      (this.data.pagination as Pagination).getData()
    })
  },
  

  onUnload () {
    this.data.pagination = null
  },

  toLogin () {
    wx.showModal({
      title: '提示',
      content: '确认退出该账号吗？',
      success (res) {
        if (res.confirm) {
          router.to(router.type.RL, '/pages/login/login')
        }
      }
    })
  },

  animation (e: any) {
    showToast({ message: e.target.id, type: e.target.id })
  } 
})

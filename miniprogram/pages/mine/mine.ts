import router, { RouteType } from '../../utils/router/index'
import { showToast } from '../../handler/useToast'

Page({
  onShow () {
    
  },

  toIndex () {
    showToast({ message: 'to index', type: 'success'})
    router.to(RouteType.ST, '/pages/index/index')
  }
})
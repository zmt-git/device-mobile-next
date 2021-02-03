import { RouterObj } from './index'
import { RouteType } from './index'
import { getGlobalData } from '../app/app'
import { showToast } from '../../handler/useToast' 
const myRoutes: any[] = getGlobalData('routes')

export function setupRouter (router: RouterObj) {
  router.beforeEnter((to: string, from: string, next: Function) => {
    if (myRoutes.includes(to)) {
      next()
    } else {
      const route = router.constructRoute(from)
  
      next(RouteType.RL, route)
      
      showToast({
        message: '您还没有该权限',
        type: 'warning',
      })
    }
  })
}

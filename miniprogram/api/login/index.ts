import request from '../../utils/http/request'
// POST /system/loginForPhone APP客户登录
export function login (params: LoginParams): Promise<any> {
  return request({
    url: '/system/loginForPhone',
    method: 'POST',
    params
  })
}

// GET /system/loginUuId 根据code登录
export function loginCode (params: LoginUUid): Promise<any> {
  return request({
    url: '/system/loginUuId',
    method: 'GET',
    params
  })
}

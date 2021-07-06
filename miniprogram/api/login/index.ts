import request from '../../utils/http/request'
interface LoginParams {
  username: string
  password: string
  uuid: string
  type: number
}

// POST /system/loginForPhone APP客户登录
export function login (params: LoginParams): Promise<any> {
  return request({
    url: '/system/loginForPhone',
    method: 'POST',
    params
  })
}

// GET /system/loginUuId 根据code登录
interface LoginUUid {
  type: number
  uuid: string
}
export function loginCode (params: LoginUUid): Promise<any> {
  return request({
    url: '/system/loginUuId',
    method: 'GET',
    params
  })
}

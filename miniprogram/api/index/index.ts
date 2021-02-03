import request from '../../utils/http/request'

// POST /deviceInfoManager/page 分页查询设备信息
export function getDeviceList (data: PageOpt) {
  return request({
    url: '/deviceInfoManager/page',
    method: 'POST',
    data
  })
}

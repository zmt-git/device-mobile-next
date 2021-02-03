interface RequestOpt {
  url: string
  method: 'POST' | 'GET' | 'DELETE'
  params?: any
  data?: any
}
interface Params {
  [propName: string]: any
}

interface UploadOpt {
  url: string,
  files: any,
  name: any
  filePath: string
  formData?: any
}

interface ResponseOpt {
  msg: string,
  result: any
}

interface ResponseResult {
  current: number
  records: any[]
  size: number
  total: number
  [propName: string]: any
}

interface ResponsePageOpt {
  msg: string,
  result: ResponseResult
}

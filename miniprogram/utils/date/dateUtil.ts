type DateFormate = 'yyyy-MM-dd hh:mm:ss' | 'yyyy-MM-dd' | 'hh:mm'
export function timestapToTime (time: number, type: DateFormate = 'yyyy-MM-dd hh:mm:ss', format: string = '-'): string {
  let result = ''
  
  if (time.toString().length === 10) {
    time = time * 1000
  }

  if (time.toString().length < 13) return result

  const date: Date = new Date(time)

  const yyyy = date.getFullYear().toString()

  const MM = (date.getMonth() + 1).toString().padStart(2, '0')

  const dd = date.getDay().toString().padStart(2, '0')

  const hh = date.getHours().toString().padStart(2, '0')

  const mm = date.getMinutes().toString().padStart(2, '0')

  const ss = date.getSeconds().toString().padStart(2, '0')
  
  switch (type) {
    case 'hh:mm': result = `${hh}:${mm}:${ss}`
      break
    case 'yyyy-MM-dd': result = `${yyyy}${format}${MM}${format}${dd}`
      break
    default: result = `${yyyy}${format}${MM}${format}${dd} ${hh}:${mm}:${ss}`
  }

  return result
}
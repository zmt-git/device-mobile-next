export function formateParams (params: Params): string {
  const arr: string[] = []

	Object.keys(params).forEach(key => {
		if (params[key] !== null && params[key] !== '' && params[key] !== undefined) {
			arr.push(`${key}=${encodeURIComponent(params[key])}`)
		}
	})

  return '?' + arr.join('&')
}

export function getData (data: Params): Params {
	let obj: Params = {}

	const arr: string[] = Object.keys(data)

	arr.forEach(key => {
		if (data[key] !== null && data[key] !== '' && data[key] !== undefined) {
			obj[key] = data[key]
		}
	})

	return obj
}

export function getSeq (seq = 1): number {
	seq++
	if (seq > 100) seq = 0
	return seq
}
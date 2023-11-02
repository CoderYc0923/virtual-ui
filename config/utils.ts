/** 格式化 - 日期 */
export function formatDate(t: Date) {
  const year = t.getFullYear()
  let month: number | string = t.getMonth()
  let day: number | string = t.getDate()
  let h: number | string = t.getHours()
  let m: number | string = t.getMinutes()
  let s: number | string = t.getSeconds()
  month = month < 10 ? '0' + month : month
  day = day < 10 ? '0' + day : day
  h = h < 10 ? '0' + h : h
  m = m < 10 ? '0' + m : m
  s = s < 10 ? '0' + s : s
  return `${year}-${month}-${day} ${h}:${m}:${s}`
}
/** 格式化 - 当前分支信息 */
export function currentRef(str: string) {
  const fs = str.split(',')
  const s = fs.filter((s) => s.indexOf('->') !== -1)[0]
  return s.slice(s.indexOf('->') + 2)
}


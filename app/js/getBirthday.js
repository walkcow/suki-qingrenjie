// 生日2017/12/20（要改成农历..）
export function compute () {
  let date = new Date()
  let y = date.getFullYear()
  let m = date.getMonth()
  let d = date.getDate()
  if (y === 2018 && m === 7 && d === 17) {
    return 23
  }
  return false
}

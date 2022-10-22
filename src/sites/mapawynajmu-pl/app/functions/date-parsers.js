export function parseDate(date) {
  let day = date.getDate()
  day = day > 9 ? day : `0${day}`
  let month = date.getMonth() + 1
  month = month > 9 ? month : `0${month}`
  return `${date.getFullYear()}-${month}-${day}`
}

export function saveCookie(name, value, expirationDate, path) {
  document.cookie = `${name}=${value};expires=${getDate(expirationDate)};path=${path || '/'}`
}

export function getCookieValue(cookieName) {
  const cookie = document.cookie
    .replace(/\s/g, '')
    .split(';')
    .find(cookie => cookie.indexOf(cookieName) !== -1)
  if (!cookie) return null
  return cookie.slice(cookieName.length + 1)
}

function getDate(expirationDate) {
  let date = new Date()
  switch (expirationDate) {
    case 'oneYear':
      date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000)
      break
    case 'twoYears':
      date.setTime(date.getTime() + 730 * 24 * 60 * 60 * 1000)
      break
    default:
      break
  }
  return date.toUTCString()
}

export function saveCookie(name, value, expirationDate, path ) {
  const expiration = expirationDate ? `expires=${getDate(expirationDate)}` : ''
  document.cookie = `${name}=${value};${expiration};path=${path || '/'}`
}

export function getCookieValue(cookieName) {
  const cookie = document.cookie.replace(/\s/g, '').split(';').find(cookie => (
    cookie.indexOf(cookieName) !== -1
  ))
  if (!cookie) return null
  return cookie.slice(cookieName.length + 1)
}

export function deleteCookie(name) {
  document.cookie = `${name}='';expires=Thu, 01 Jan 1970 00:00:01 GMT;path=''}`
}

function getDate(expirationDate) {
  let date = new Date()
  switch (expirationDate) {
    case 'ninetyDays':
      date.setTime(date.getTime() + (90*24*60*60*1000))
      break
    case 'oneYear':
      date.setTime(date.getTime() + (365*24*60*60*1000))
      break
    case 'twoYears':
      date.setTime(date.getTime() + (730*24*60*60*1000))
      break
    default:
      break
  }
  return date.toUTCString()
}

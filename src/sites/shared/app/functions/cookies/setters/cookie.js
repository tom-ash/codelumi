function setCookie(name, value, expiration, path) {
  document.cookie = `${name}=${value};expires=${expirationInMillisecond(expiration)};path=${path || '/'}`
}

function expirationInMillisecond(expirationAsString) {
  let date = new Date()
  switch (expirationAsString) {
    case 'oneYear':
      date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000)
      break
    case 'twoYears':
      date.setTime(date.getTime() + 730 * 24 * 60 * 60 * 1000)
      break
    case 'oneDay':
      date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000)
      break
    default:
      break
  }
  return date.toUTCString()
}

export default setCookie

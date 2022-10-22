function getCookieAsBool(cookieValue) {
  switch (cookieValue) {
    case 'true':
      return true
    case 'false':
      return false
    default:
      return null
  }
}

export default getCookieAsBool

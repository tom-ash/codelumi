function getPureUrl(originalUrl) {
  let pureUrl = originalUrl

  if (pureUrl.indexOf('?') !== -1) pureUrl = pureUrl.substring(0, pureUrl.indexOf('?'))
  if (pureUrl === '/') return pureUrl

  if (pureUrl[0] === '/') pureUrl = pureUrl.slice(1)
  if (pureUrl.slice(-1) === '/') pureUrl = pureUrl.slice(0, -1)

  return pureUrl
}

export default getPureUrl

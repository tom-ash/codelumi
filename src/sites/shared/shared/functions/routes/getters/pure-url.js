function getPureUrl(originalUrl) {
  let pureUrl = originalUrl

  if (pureUrl.indexOf('?') !== -1) pureUrl = pureUrl.substring(0, pureUrl.indexOf('?'))
  if (pureUrl === '/') return pureUrl

  return pureUrl.replace(/(\/)+$/, '').replace(/^\//, '')
}

export default getPureUrl

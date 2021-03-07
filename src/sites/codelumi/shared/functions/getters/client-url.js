function getClientUrl() {
  switch (APP_ENV) {
    case 'development': return 'http://local-codelumi.com:8080'
    case 'production': return 'https://www.codelumi.com'
    default: return ''
  }
}

export default getClientUrl

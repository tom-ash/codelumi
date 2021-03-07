function getClientUrl() {
  switch (APP_ENV) {
    case 'development': return 'http://local-warsawlease.pl:8080'
    case 'production': return 'https://www.warsawlease.pl'
    default: return ''
  }
}

export default getClientUrl

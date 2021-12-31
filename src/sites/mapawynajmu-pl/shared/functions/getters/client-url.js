function getClientUrl() {
  switch (APP_ENV) {
    case 'production': return 'https://www.warsawlease.pl'
    case 'development': return 'http://local.warsawlease.pl:8080'
    default: return ''
  }
}

export default getClientUrl

function provideClientUrl(appEnv) {
  switch (appEnv) {
    case 'development': return 'http://local-warsawlease.pl:8080'
    case 'staging': return 'https://warsaw-lease-client-staging.herokuapp.com'
    case 'production': return 'https://www.warsawlease.pl'
    default: return ''
  }
}

module.exports = provideClientUrl

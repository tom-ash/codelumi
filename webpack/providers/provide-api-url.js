function provideApiUrl(appEnv) {
  switch (appEnv) {
    case 'development': return 'http://localhost:3001'
    case 'staging': return 'https://warsaw-lease-server-staging.herokuapp.com'
    case 'production': return 'https://warsawleaseserver.herokuapp.com'
    default: return ''
  }
}

module.exports = provideApiUrl
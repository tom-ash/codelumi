function provideApiUrl(appEnv) {
  switch (appEnv) {
    case 'development': return 'http://localhost:3001'
    case 'production': return 'https://codelumired.herokuapp.com'
    default: return ''
  }
}

module.exports = provideApiUrl

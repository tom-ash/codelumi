function provideApiUrl(appEnv) {
  switch (appEnv) {
    case 'development': return 'http://localhost:3001/warsawlease'
    case 'production': return 'https://codelumired.herokuapp.com/warsawlease'
    default: return ''
  }
}

module.exports = provideApiUrl

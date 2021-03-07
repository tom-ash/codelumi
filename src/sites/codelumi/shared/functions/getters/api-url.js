function getApiUrl() {
  switch (APP_ENV) {
    case 'development': return 'http://localhost:3001/codelumi'
    case 'production': return 'https://codelumired.herokuapp.com/codelumi'
    default: return ''
  }
}

export default getApiUrl

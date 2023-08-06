function getApiUrl() {
  switch (APP_ENV) {
    case 'development':
      return 'http://localhost:3001/skillfind-tech'
    case 'production':
      return 'https://warsaw-digital-server.herokuapp.com/skillfind-tech'
    default:
      return ''
  }
}

export default getApiUrl

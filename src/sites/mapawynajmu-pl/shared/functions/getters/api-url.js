function getApiUrl() {
  switch (APP_ENV) {
    case 'development':
      return 'http://localhost:3001/mapawynajmu-pl'
    case 'production':
      return 'https://warsaw-digital-server.herokuapp.com/mapawynajmu-pl'
    default:
      return ''
  }
}

export default getApiUrl

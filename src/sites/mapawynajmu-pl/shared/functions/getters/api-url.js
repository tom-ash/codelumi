function getApiUrl() {
  switch (APP_ENV) {
    case 'development': return 'http://localhost:3001/mapawynajmu-pl'
    case 'production': return 'https://soundof-it-red.herokuapp.com/mapawynajmu-pl'
    default: return ''
  }
}

export default getApiUrl

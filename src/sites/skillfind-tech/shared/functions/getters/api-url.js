function getApiUrl() {
  switch (APP_ENV) {
    case 'development':
      return 'http://localhost:3001/skillfind_tech'
    case 'production':
      return 'https://soundof-it-red.herokuapp.com/skillfind_tech'
    default:
      return ''
  }
}

export default getApiUrl

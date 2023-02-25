function getApiUrl() {
  switch (APP_ENV) {
    case 'development':
      return 'http://localhost:3001/skillfind_tech'
    case 'production':
      return 'https://soundof-it-red.herokuapp.com/soundof_it'
    default:
      return ''
  }
}

export default getApiUrl

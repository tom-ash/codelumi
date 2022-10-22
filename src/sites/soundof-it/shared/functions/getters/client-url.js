function getClientUrl() {
  switch (APP_ENV) {
    case 'production':
      return 'https://soundof.it'
    case 'development':
      return 'http://local.soundof.it:8080'
    default:
      return ''
  }
}

export default getClientUrl

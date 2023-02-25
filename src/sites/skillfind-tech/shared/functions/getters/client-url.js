function getClientUrl() {
  switch (APP_ENV) {
    case 'production':
      return 'https://skillfind.tech'
    case 'development':
      return 'http://local.skillfind.tech:8080'
    default:
      return ''
  }
}

export default getClientUrl

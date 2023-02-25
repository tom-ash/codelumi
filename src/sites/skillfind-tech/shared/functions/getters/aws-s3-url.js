function getAwsS3Url() {
  switch (APP_ENV) {
    case 'development':
      return 'https://warsawleasedev.s3.eu-central-1.amazonaws.com'
    case 'production':
      return 'https://warsawlease.s3.eu-central-1.amazonaws.com'
    default:
      return ''
  }
}

export default getAwsS3Url

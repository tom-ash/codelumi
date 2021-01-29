function provideAwsS3Url(appEnv) {
  switch (appEnv) {
    case 'development': return 'https://warsawleasedev.s3.eu-central-1.amazonaws.com'
    case 'staging': return 'https://warsaw-lease-staging.s3.eu-central-1.amazonaws.com'
    case 'production': return 'https://warsawlease.s3.eu-central-1.amazonaws.com'
    default: return ''
  }
}

module.exports = provideAwsS3Url
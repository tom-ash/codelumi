export function getGoogleAnalyticsMeasurementId() {
  switch (APP_ENV) {
    case 'development':
      return 'G-7C9F5ER5V7'
    case 'production':
      return 'G-KQJP4LBN23'
    default:
      return ''
  }
}

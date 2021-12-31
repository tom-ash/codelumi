function getGoogleAnalyticsMeasurementId() {
  switch (APP_ENV) {
    case 'development': return 'G-V92XR2FJ9Z'
    case 'production': return 'G-5DR0FTEB6E'
    default: return ''
  }
}

export default getGoogleAnalyticsMeasurementId

import loadScript from '../../scripts/load.js'
import getGoogleAnalyticsMeasurementId from '../../../../../warsawlease-pl/app/functions/analytics/google/getters/measurement-id.js'

export function loadGoogleAnalytics() {
  if (typeof window === 'undefined') return
  
  const { changeApp, scripts } = this.props

  const measurementId = getGoogleAnalyticsMeasurementId()

  changeApp({ scripts: { ...scripts, googleAnalyticsLoading: true } })
  loadScript(`https://www.googletagmanager.com/gtag/js?id=${measurementId}`)
  .then(() => {
    const { scripts } = this.props

    window.dataLayer = window.dataLayer || []
    function gtag() { dataLayer.push(arguments) }
    gtag('js', new Date())
    gtag('config', measurementId)

    changeApp({ scripts: { ...scripts, googleAnalyticsLoading: false, googleAnalytics: true } })
  })
}
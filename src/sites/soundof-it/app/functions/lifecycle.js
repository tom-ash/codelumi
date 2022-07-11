import API_URL from '../../shared/constants/urls/api.js'
import { loadGoogleAnalytics } from '../../../shared/app/functions/analytics/google/load.js'
import getGoogleAnalyticsMeasurementId from './analytics/google/getters/measurement-id.js'

export function componentDidMount() {
  if (typeof window === 'undefined') return

  const { routeSynced, changeApp } = this.props

  this.screenSizeHandler()
  window.addEventListener('resize', this.screenSizeHandler, false)

  if (!routeSynced) this.matchStateToRoute({ apiUrl: API_URL })

  window.onpopstate = () => this.popStateHandler({ apiUrl: API_URL })
}

export function componentDidUpdate(prevProps) {
  const { loadGa: prevLoadGa } = prevProps
  const { statisticsConsent, loadGa, changeApp } = this.props

  if (statisticsConsent && !loadGa) changeApp({ loadGa: true })
  if (!prevLoadGa && loadGa) {
    loadGoogleAnalytics.call(this, getGoogleAnalyticsMeasurementId())
  }
}

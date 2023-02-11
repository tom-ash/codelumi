import API_URL from '../../shared/constants/urls/api'
import { loadGoogleAnalytics } from '../../../shared/app/functions/analytics/google/load'
import getGoogleAnalyticsMeasurementId from './analytics/google/getters/measurement-id'

export function componentDidMount() {
  if (typeof window === 'undefined') return

  this.screenSizeHandler()
  window.addEventListener('resize', this.screenSizeHandler, false)

  if (process.env.NODE_ENV === 'development') {
    this.matchStateToRoute({ apiUrl: API_URL, isSSR: true })
  }

  window.onpopstate = () => this.popStateHandler({ apiUrl: API_URL })
}

export function componentDidUpdate(prevProps) {
  const { loadGa: prevLoadGa } = prevProps
  const { statisticsConsent, loadGa, setApp } = this.props

  if (statisticsConsent && !loadGa) setApp({ loadGa: true })
  if (!prevLoadGa && loadGa) {
    loadGoogleAnalytics.call(this, getGoogleAnalyticsMeasurementId())
  }
}

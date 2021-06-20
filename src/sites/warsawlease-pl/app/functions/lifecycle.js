import { initializeGoogleMaps } from './load-google-maps'
import { isMobile } from './is-mobile'
import { loadGoogleAnalytics } from '../../../shared/app/functions/analytics/google/load.js'
import { loadFonts } from './load-fonts'
import API_URL from '../../shared/constants/urls/api.js'
import getGoogleAnalyticsMeasurementId from './analytics/google/getters/measurement-id.js'

export function componentDidMount() {
  if (typeof window === 'undefined') return

  loadFonts()
  
  const { routeSynced, changeApp } = this.props

  initializeGoogleMaps.apply(this)

  if (isMobile()) changeApp({ isMobile: true })

  this.screenSizeHandler()
  window.addEventListener('resize', this.screenSizeHandler, false)  
  window.addEventListener('scroll', () => {
    const scrollY = (window.pageYOffset || document.scrollTop) || 0
    if (this.props.scrollY + 100 > scrollY || this.props.scrollY - 100 < scrollY) {
      changeApp({ scrollY: 100 * Math.ceil(scrollY / 100) })
    }
  })

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

import { initializeGoogleMaps } from './load-google-maps'
import { isMobile } from './is-mobile'
import { loadFonts } from './load-fonts'
import API_URL from '../../shared/constants/urls/api'
import { loadGoogleAnalytics } from '../../../shared/app/functions/analytics/google/load'
import getGoogleAnalyticsMeasurementId from './analytics/google/getters/measurement-id'

export function componentDidMount() {
  if (typeof window === 'undefined') return

  loadFonts()

  const { setApp } = this.props

  initializeGoogleMaps.apply(this)

  if (isMobile()) setApp({ isMobile: true })

  this.screenSizeHandler()
  window.addEventListener('resize', this.screenSizeHandler, false)
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset || document.scrollTop || 0
    if (this.props.scrollY + 100 > scrollY || this.props.scrollY - 100 < scrollY) {
      setApp({ scrollY: 100 * Math.ceil(scrollY / 100) })
    }
  })

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

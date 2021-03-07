import { initializeGoogleMaps } from './load-google-maps'
import { isMobile } from './is-mobile'
import { loadGoogleAnalytics } from './load-google-analytics'
import { loadFonts } from './load-fonts'
import API_URL from '../../shared/constants/urls/api.js'

export function componentDidMount() {
  if (typeof window === 'undefined') return

  loadFonts()
  
  const { urlDataSynced, changeApp } = this.props

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

  if (!urlDataSynced) this.matchStateToRoute({ apiUrl: API_URL })

  window.onpopstate = () => this.popStateHandler({ apiUrl: API_URL })
}

export function componentDidUpdate(prevProps) {
  const { googleAnalyticsLoaded, googleAnalyticsLoading, statisticsConsent } = this.props

  if (!googleAnalyticsLoaded && !googleAnalyticsLoading && statisticsConsent) {
    loadGoogleAnalytics.call(this)
  }
}

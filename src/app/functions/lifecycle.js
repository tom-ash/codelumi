import { loadGoogleMaps } from './load-google-maps'
import { isMobile } from './is-mobile'
import { routes } from '../constants/routes'
import { routeMatchers } from '../constants/route-matchers'


import { loadGoogleAnalytics } from './load-google-analytics'

export function componentDidMount() {
  const { changeApp } = this.props

  if (isMobile()) changeApp({ isMobile: true })
  loadGoogleMaps.apply(this)
  this.screenSizeHandler()
  window.addEventListener('resize', this.screenSizeHandler, false)  
  this.authorizeUserWithTokens()
  window.onpopstate = () => this.popStateHandler()

  window.addEventListener('scroll', () => {
    const scrollY = (window.pageYOffset || document.scrollTop) || 0
    if (this.props.scrollY + 100 > scrollY || this.props.scrollY - 100 < scrollY) {
      changeApp({ scrollY: 100 * Math.ceil(scrollY / 100) })
    }
  });

  this.checkRoute()
}

export function componentDidUpdate(prevProps) {
  const { googleAnalyticsLoaded, googleAnalyticsLoading, statisticsConsent } = this.props
  
  this.handlePathname(prevProps)

  if (!googleAnalyticsLoaded && !googleAnalyticsLoading && statisticsConsent) {
    loadGoogleAnalytics.call(this)
  }
}

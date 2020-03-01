import { loadGoogleMaps } from './load-google-maps'
import { isMobile } from './is-mobile'
import { getCookieValue } from './cookie-handlers'
import { loadGoogleAnalytics } from './load-google-analytics'

export function componentDidMount() {
  if (typeof window === 'undefined') return
  
  const { changeApp } = this.props

  if (isMobile()) changeApp({ isMobile: true })
  setLanguage.apply(this)
  loadGoogleMaps.apply(this)

  this.screenSizeHandler()
  window.addEventListener('resize', this.screenSizeHandler, false)  
  window.addEventListener('scroll', () => {
    const scrollY = (window.pageYOffset || document.scrollTop) || 0
    if (this.props.scrollY + 100 > scrollY || this.props.scrollY - 100 < scrollY) {
      changeApp({ scrollY: 100 * Math.ceil(scrollY / 100) })
    }
  });

  this.matchStateToPath({ popState: false })
  window.onpopstate = () => this.popStateHandler()
  this.authorizeUserWithTokens()
}

export function componentDidUpdate(prevProps) {
  const { googleAnalyticsLoaded, googleAnalyticsLoading, statisticsConsent } = this.props
  
  this.matchPathToState(prevProps)

  if (!googleAnalyticsLoaded && !googleAnalyticsLoading && statisticsConsent) {
    loadGoogleAnalytics.call(this)
  }
}

function setLanguage() {
  const { changeApp } = this.props

  const cookieLanguage = getCookieValue('lang')
  if (cookieLanguage) return changeApp({ language: cookieLanguage })

  // const navigatorLanguage = navigator.language
  // if (typeof navigatorLanguage === 'string' && navigatorLanguage.toLowerCase().indexOf('pl') === -1) {
  //   changeApp({ language: 'en' })
  // }
}

import API_URL from '../../shared/constants/urls/api.js'

export function componentDidMount() {
  if (typeof window === 'undefined') return

  const { urlDataSynced, changeApp } = this.props

  // FIX
  // if (isMobile()) changeApp({ isMobile: true })

  this.screenSizeHandler()

  // FIX
  // window.addEventListener('resize', this.screenSizeHandler, false)  
  // window.addEventListener('scroll', () => {
  //   const scrollY = (window.pageYOffset || document.scrollTop) || 0
  //   if (this.props.scrollY + 100 > scrollY || this.props.scrollY - 100 < scrollY) {
  //     changeApp({ scrollY: 100 * Math.ceil(scrollY / 100) })
  //   }
  // })

  if (!urlDataSynced) this.matchStateToRoute({ apiUrl: API_URL })

  window.onpopstate = () => this.popStateHandler({ apiUrl: API_URL })
}

export function componentDidUpdate(prevProps) {

  // FIX
  // const { googleAnalyticsLoaded, googleAnalyticsLoading, statisticsConsent } = this.props

  // if (!googleAnalyticsLoaded && !googleAnalyticsLoading && statisticsConsent) {
  //   loadGoogleAnalytics.call(this)
  // }
}

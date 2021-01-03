import { initializeGoogleMaps } from './load-google-maps'
import { isMobile } from './is-mobile'
import { loadGoogleAnalytics } from './load-google-analytics'
import { loadFonts } from './load-fonts'

export function componentDidMount() {
  if (typeof window === 'undefined') return

  loadFonts()
  
  const {
    scalableVectorGraphics,
    changeApp
  } = this.props

  if (Object.keys(scalableVectorGraphics).length === 0) {
    getScalableVectorGraphics.apply(this)
  } else {
    initializeGoogleMaps.apply(this)
  }

  if (isMobile()) changeApp({ isMobile: true })

  this.screenSizeHandler()
  window.addEventListener('resize', this.screenSizeHandler, false)  
  window.addEventListener('scroll', () => {
    const scrollY = (window.pageYOffset || document.scrollTop) || 0
    if (this.props.scrollY + 100 > scrollY || this.props.scrollY - 100 < scrollY) {
      changeApp({ scrollY: 100 * Math.ceil(scrollY / 100) })
    }
  });

  if (APP_ENV === 'development') this.matchRenderToRoute({ popState: false })

  window.onpopstate = () => this.popStateHandler()
  this.authorizeUserWithTokens()
}

export function componentDidUpdate(prevProps) {
  const {
    shouldMatchRouteToRenderAndLanguage: prevShouldMatchRouteToRender
  } = prevProps

  const {
    googleAnalyticsLoaded,
    googleAnalyticsLoading,
    statisticsConsent,
    shouldMatchRouteToRenderAndLanguage
  } = this.props

  if (shouldMatchRouteToRenderAndLanguage && !prevShouldMatchRouteToRender) {
    this.matchRouteToRenderAndLanguage()
  }

  // TODO !!! TURN ON
  // if (!googleAnalyticsLoaded && !googleAnalyticsLoading && statisticsConsent) {
  //   loadGoogleAnalytics.call(this)
  // }
}

function getScalableVectorGraphics() {
  const {
    changeApp
  } = this.props

  fetch(`${API_URL}/scalable_vector_graphics`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(json => {
    const scalableVectorGraphics = {}
    json.map(svg => {
      scalableVectorGraphics[svg.name] = svg.path_data
    })
    changeApp({ scalableVectorGraphics }, initializeGoogleMaps.apply(this))
  })
}

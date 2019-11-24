import { loadGoogleMaps } from './load-google-maps'
import { isMobile } from './is-mobile'

export function componentDidMount() {
  const { changeApp } = this.props

  if (isMobile()) changeApp({ isMobile: true })
  loadGoogleMaps.apply(this)
  this.screenSizeHandler()


  changeApp({ path: window.location.pathname })

  
  window.addEventListener('resize', this.screenSizeHandler, false);
  this.authorizeUserWithTokens()
  window.onpopstate = () => this.popStateHandler()

  window.addEventListener('scroll', () => {
    const scrollY = (window.pageYOffset || document.scrollTop) || 0
    if (this.props.scrollY + 100 > scrollY || this.props.scrollY - 100 < scrollY) {
      changeApp({ scrollY: 100 * Math.ceil(scrollY / 100) })
    }
  });


}

export function componentWillMount() {
}

export function componentDidUpdate() {
}

import { loadGoogleMaps } from './load-google-maps'
import { isMobile } from './is-mobile'

export function componentDidMount() {
  if (isMobile()) this.props.changeIsMobile(true)
  loadGoogleMaps.apply(this)
  this.screenSizeHandler()
  this.props.changePath(window.location.pathname)
  window.addEventListener('resize', this.screenSizeHandler, false);
  this.authorizeUserWithTokens()
  window.onpopstate = () => this.popStateHandler()

  window.addEventListener('scroll', () => {
    const scrollY = (window.pageYOffset || document.scrollTop) || 0
    if (this.props.scrollY + 100 > scrollY || this.props.scrollY - 100 < scrollY) {
      this.props.changeScrollY(100 * Math.ceil(scrollY / 100))
    }
  });


}

export function componentWillMount() {
}

export function componentDidUpdate() {
}

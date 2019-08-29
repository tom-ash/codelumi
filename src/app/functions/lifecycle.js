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
}

export function componentWillMount() {
}

export function componentDidUpdate() {
}

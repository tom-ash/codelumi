import { loadGoogleMaps } from './load-google-maps'

export function componentDidMount() {
  loadGoogleMaps.apply(this)
  this.screenSizeHandler()
  this.props.changePath(window.location.pathname)
  window.addEventListener('resize', this.screenSizeHandler, false);
  this.authorizeUserWithTokens()
  // window.onpopstate = () => {this.popStateRoute()}
}

export function componentWillMount() {
}

export function componentDidUpdate() {
}

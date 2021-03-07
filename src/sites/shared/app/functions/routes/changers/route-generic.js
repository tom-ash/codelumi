import scrollToTop from '../../screen/scrollers/to-top.js'

function changeRouteGeneric({ apiUrl, href, withoutScroll }) {
  window.history.pushState({}, '', href.replace(/\/\/$/, '/'))

  this.matchStateToRoute({ apiUrl })

  if (withoutScroll !== true) scrollToTop()
}

export default changeRouteGeneric

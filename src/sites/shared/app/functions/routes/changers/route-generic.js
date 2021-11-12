import scrollToTop from '../../screen/scrollers/to-top.js'

function changeRouteGeneric({ apiUrl, href, withoutScroll, retainQueryParams }) {
  let decoratedHref = href.replace(/\/\/$/, '/')
  decoratedHref = retainQueryParams ? decoratedHref + window.location.search : decoratedHref

  window.history.pushState({}, '', decoratedHref)

  this.matchStateToRoute({ apiUrl })

  if (withoutScroll !== true) scrollToTop()
}

export default changeRouteGeneric

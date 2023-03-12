import scrollToTop from '../../screen/scrollers/to-top'

function changeRouteGeneric({ href, withoutScroll, retainQueryParams }) {
  let decoratedHref = href.replace(/\/\/$/, '/')
  decoratedHref = retainQueryParams ? decoratedHref + window.location.search : decoratedHref

  // TODO: FIX!
  window.history.pushState({}, '', decoratedHref)
  window.dispatchEvent(new Event('popstate'));

  if (withoutScroll !== true) scrollToTop()
}

export default changeRouteGeneric

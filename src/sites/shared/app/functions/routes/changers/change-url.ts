import scrollToTop from '../../screen/scrollers/to-top'

// @ts-ignore
export const changeUrl = ({ href, withScroll = true, retainQueryParams = false }) => {
  let decoratedHref = href.replace(/\/\/$/, '/')

  if (decoratedHref.indexOf('://') === -1) {
    decoratedHref = decoratedHref.replace(/^\//, '')
    decoratedHref = window.location.origin + '/' + decoratedHref
  }

  decoratedHref = retainQueryParams ? decoratedHref + location.search : decoratedHref

  history.pushState({}, '', decoratedHref)
  dispatchEvent(new Event('popstate'))

  if (withScroll) scrollToTop()
}

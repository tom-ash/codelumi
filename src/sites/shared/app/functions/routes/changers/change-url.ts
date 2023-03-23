import scrollToTop from '../../screen/scrollers/to-top'

// @ts-ignore
export const changeUrl = ({ href, withScroll = true, retainQueryParams = false }) => {
  let decoratedHref = href.replace(/\/\/$/, '/')
  decoratedHref = retainQueryParams ? decoratedHref + location.search : decoratedHref

  history.pushState({}, '', decoratedHref)
  dispatchEvent(new Event('popstate'))

  if (withScroll) scrollToTop()
}

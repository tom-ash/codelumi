import scrollToTop from '../../screen/scrollers/to-top'

export const changeUrl = ({ href, withScroll = true, retainQueryParams = false }) => {
  let decoratedHref = href.replace(/\/\/$/, '/')
  decoratedHref = retainQueryParams ? decoratedHref + window.location.search : decoratedHref

  window.history.pushState({}, '', decoratedHref)
  window.dispatchEvent(new Event('popstate'));

  if (withScroll) scrollToTop()
}

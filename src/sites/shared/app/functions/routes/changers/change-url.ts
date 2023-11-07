import scrollToTop from '../../screen/scrollers/to-top'

// @ts-ignore
export const changeUrl = ({ href, withScroll = true, retainQueryParams = false }) => {
  if (href.match(/^http/)) {
    location.href = href
  } else {
    const queryParams = retainQueryParams ? location.search : ''
    const url = window.location.origin + href + queryParams

    history.pushState({}, '', url)
    dispatchEvent(new Event('popstate'))
  
    if (withScroll) scrollToTop()
  }
}

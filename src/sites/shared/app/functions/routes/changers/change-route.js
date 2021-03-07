import scrollToTop from '../../screen/scrollers/to-top.js'

function changeRoute({ href, withoutScroll }) {
  window.history.pushState({}, '', href.replace(/\/\/$/, '/'))

  this.matchStateToRoute({})

  if (withoutScroll !== true) scrollToTop()
}

export default changeRoute

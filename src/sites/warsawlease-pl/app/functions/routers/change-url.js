import { instantScroll } from '../scrollers/instant-scroll'

export function changeUrl({ href, withoutScroll }) {
  window.history.pushState({}, '', href.replace(/\/\/$/, '/'))

  this.matchStateToUrl({})

  if (withoutScroll !== true) instantScroll()
}

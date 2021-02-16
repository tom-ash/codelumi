import { instantScroll } from '../scrollers/instant-scroll'

export function changeUrl({ href, withoutScroll }) {
  window.history.pushState({}, '', href.replace(/\/\/$/, '/'))

  this.matchStateToRoute({})

  if (withoutScroll !== true) instantScroll()
}

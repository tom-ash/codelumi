import { findScrollingElement } from './find-scrolling-element'

export function instantScroll(scrollTo) {
  scrollTo = scrollTo || 0
  const scrollingElement = findScrollingElement()
  if (!scrollingElement) return
  scrollingElement.scrollTop = scrollTo
}
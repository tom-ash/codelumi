import { findScrollingElement } from './find-scrolling-element'

export function instantScroll() {
  const scrollingElement = findScrollingElement()
  if (!scrollingElement) return
  scrollingElement.scrollTop = 0
}
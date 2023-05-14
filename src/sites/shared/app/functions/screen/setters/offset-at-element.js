import getScrollingElement from '../getters/scrolling-element'

export function setScreenOffsetAtElement({ element, translation }) {
  if (typeof window === 'undefined') return

  const scrollingElement = getScrollingElement()
  const destination = window.pageYOffset + element.getBoundingClientRect().top + translation

  scrollingElement.scrollTop = destination
}

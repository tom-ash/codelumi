import getScrollingElement from '../getters/scrolling-element';

function scrollToTop(scrollTo) {
  scrollTo = scrollTo || 0;
  const scrollingElement = getScrollingElement();
  if (!scrollingElement) return;
  scrollingElement.scrollTop = scrollTo;
}

export default scrollToTop;

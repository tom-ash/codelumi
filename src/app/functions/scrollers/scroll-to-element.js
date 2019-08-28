import { findScrollingElement } from './find-scrolling-element'

export function scrollToElement(element, speed, translation = 0) {
  speed = speed || 42
  const scrollingElement = findScrollingElement()
  let direction = 'up'
  const destination = window.pageYOffset + element.getBoundingClientRect().top + translation
  if (element.getBoundingClientRect().top > scrollingElement.offsetTop) direction = 'down'
  setScrollingInterval(scrollingElement, direction, destination, speed )
}

function setScrollingInterval(scrollingElement, direction, destination, speed) {
  const scrollInterval = setInterval(function(){
    if (direction == 'down') {
      scrollingElement.scrollTop += speed
      if (scrollingElement.scrollTop > destination) {
        clearInterval(scrollInterval)
      }
    } else {
      scrollingElement.scrollTop -= speed
      if (scrollingElement.scrollTop < destination) {
        clearInterval(scrollInterval)
      }
    }
  }, 4)
  setTimeout(() => clearInterval(scrollInterval), 5000)
}
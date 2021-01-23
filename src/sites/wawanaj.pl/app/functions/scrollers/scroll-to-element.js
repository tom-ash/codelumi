import { findScrollingElement } from './find-scrolling-element'

export function scrollToElement(element, speed, translation = 0, callback) {
  if (typeof window === 'undefined') return

  speed = speed || 42
  const scrollingElement = findScrollingElement()
  let direction = 'up'
  const destination = window.pageYOffset + element.getBoundingClientRect().top + translation
  if (element.getBoundingClientRect().top > scrollingElement.offsetTop) direction = 'down'
  setScrollingInterval(scrollingElement, direction, destination, speed, callback)
}

function setScrollingInterval(scrollingElement, direction, destination, speed, callback) {
  let callbackFired = false
  const scrollInterval = setInterval(function(){
    if (direction == 'down') {
      scrollingElement.scrollTop += speed
      if (scrollingElement.scrollTop > destination) {
        clearInterval(scrollInterval)
        if (callback) {
          callbackFired = true
          callback()
        }
      }
    } else {
      scrollingElement.scrollTop -= speed
      if (scrollingElement.scrollTop < destination) {
        clearInterval(scrollInterval)
        if (callback) {
          callbackFired = true
          callback()
        }
      }
    }
  }, 4)
  setTimeout(() => {
    clearInterval(scrollInterval)
    if (callback && !callbackFired) callback()
  }, 5000)
}

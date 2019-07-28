export function scrollToElement(element, speed) {
  speed = speed || 40
  const interval = 10
  const scrollingElement = findScrollingElement()
  const currentScroll = scrollingElement.scrollTop
  const offsetTop = -element.getBoundingClientRect().top + 128
  const scrollInterval = setScrollInteval(scrollingElement, speed, offsetTop, interval)
  setTimeout(() => { clearInterval(scrollInterval) }, calculateTimeout(currentScroll, offsetTop, speed, interval))
}

function findScrollingElement() {
  let documentElement = document.documentElement
  let parentNode = document.body.parentNode
  let body = document.body
  let nodes = [body, documentElement, parentNode]
  for (let i = 0; i < 3; i++) {
    let element = nodes[i]
    if (element && element.scrollTop !== 0) return element
  }
}

function calculateTimeout(currentScroll, offsetTop, speed, interval) {
  return ((offsetTop) / speed) * interval * 2
}

function setScrollInteval(scrollingElement, speed, offsetTop, interval) {
  const scrollInterval = setInterval(function(){
    scrollingElement.scrollTop -= speed
    offsetTop -= speed
    if (offsetTop < 0) { clearInterval(scrollInterval) }
  }, interval)
  return scrollInterval
}
export function findScrollingElement() {
  let documentElement = document.documentElement
  let parentNode = document.body.parentNode
  let body = document.body
  let nodes = [body, documentElement, parentNode]
  for (let i = 0; i < 3; i++) {
    let element = nodes[i]
    if (element && element.scrollTop !== 0) return element
  }
}
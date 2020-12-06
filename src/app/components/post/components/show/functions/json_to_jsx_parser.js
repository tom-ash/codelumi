import React from 'react'

export function jsonToJsxParser(json) {
  try {
    const parsedJson = typeof json === 'object' ? json : JSON.parse(json)

    const jsx = parsedJson.map(function(node, index) {
      const attrs = node.a || {}
      const nodeTag = node.t
      const htmlTag = ['p', 'div', 'h1', 'h2', 'h3'].indexOf(nodeTag) !== -1 ? nodeTag : 'p'
  
      return React.createElement(
        htmlTag,
        { ...attrs, ...{ key: index } },
        node.c
      )
    })

    return jsx
  } catch {
    return (
      <div>
        Invalid json syntax!
      </div>
    )
  }
}

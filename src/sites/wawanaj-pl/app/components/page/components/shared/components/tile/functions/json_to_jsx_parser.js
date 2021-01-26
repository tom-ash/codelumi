import React from 'react'

const allowedTags = [
  'p',
  'div',
  'h1',
  'h2',
  'h3'
]

export function jsonToJsxParser(json) {
  try {
    const parsedJson = typeof json === 'object' ? json : JSON.parse(json)

    const jsx = parsedJson.map(function(node, index) {
      const attrs = node.a || {}
      const nodeTag = node.t || 'p'

      if (nodeTag === 'picture') {
        return (
          <img
            key={index}
            src={node.url}
            style={{
              width: '100%',
              height: 320,
            }}
            loading='lazy'
          />
        )
      }

      if (['p', 'div', 'h1', 'h2', 'h3'].indexOf(nodeTag) === -1) return null
  
      return React.createElement(
        nodeTag,
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

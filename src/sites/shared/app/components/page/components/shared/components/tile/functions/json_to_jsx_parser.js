import React from 'react'

const commonTags = ['h1', 'h2', 'h3', 'div', 'p']

function jsonToJsxParser({ body }) {
  try {
    const parsedJson = typeof body === 'object' ? body : JSON.parse(body)

    const jsx = parsedJson.map(function(node, index) {
      const attrs = node.a || {}
      const nodeTag = node.t || 'p'

      if (nodeTag === 'picture') {
        return <img src={node.url} style={{ width: '100%', height: 320 }} loading='lazy' key={index} />
      }

      if (commonTags.indexOf(nodeTag) === -1) return null

      return React.createElement(nodeTag, { ...attrs, ...{ key: index } }, node.c)
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

export default jsonToJsxParser
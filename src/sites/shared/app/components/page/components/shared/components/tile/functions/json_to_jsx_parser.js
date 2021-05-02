import React from 'react'
import Link from '../components/link/link.js'

const commonTags = ['h1', 'h2', 'h3', 'div', 'p']

function jsonToJsxParser({ body, clientUrl, changeRoute, customNodeParser }) {
  try {
    const parsedJson = typeof body === 'object' ? body : JSON.parse(body)

    const jsx = parsedJson.map(function(node, index) {
      const attrs = node.a || {}
      const nodeTag = node.t || 'p'
      const nodeContent = node.c

      if (nodeTag === 'picture') {
        return <img src={node.url} loading='lazy' key={index} />
      }

      if (commonTags.indexOf(nodeTag) !== -1) {
        return React.createElement(nodeTag, { ...attrs, ...{ key: index } }, nodeContent)
      }

      if (nodeTag === 'link') return <Link key={index} {...{ clientUrl, changeRoute, nodeContent }}/>

      return customNodeParser({ nodeTag, nodeContent, attrs, index})
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
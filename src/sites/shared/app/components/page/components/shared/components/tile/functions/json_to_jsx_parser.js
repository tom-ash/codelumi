import React from 'react'
import Link from '../components/link/link.js'

const commonTags = ['h1', 'h2', 'h3', 'div', 'p']

const jsonToJsxParser = props => {
  const { jsonBody, clientUrl, changeRoute, customNodeParser } = props

  const jsx = jsonBody.map(function(node, index) {
    const attrs = node.a || {}
    const nodeTag = node.t || 'p'
    const nodeContent = node.c

    if (nodeTag === 'picture') return <img src={node.url} loading='lazy' key={index} />
    if (commonTags.indexOf(nodeTag) !== -1) return React.createElement(nodeTag, { ...attrs, ...{ key: index } }, nodeContent)
    if (nodeTag === 'link') return <Link key={index} {...{ clientUrl, changeRoute, nodeContent }}/>
    if (nodeTag === 'float-clear') return <div key={index} className='float-clear'/>

    return customNodeParser({  clientUrl, nodeTag, nodeContent, attrs, changeRoute, index })
  })

  return jsx
}

export default jsonToJsxParser
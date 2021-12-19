import React from 'react'
import Link from '../components/link/link.js'
import List from '../components/list/list.js'
import urlify from '../../../../../../../../../shared/shared/functions/transformers/routes/urlify.js'

const commonTags = ['h1', 'h2', 'h3', 'h4', 'div', 'p']

const jsonToJsxParser = props => {
  const { device, isAdmin, jsonBody, jsonMeta, clientUrl, changeRoute, buildUrl, customNodeParser } = props

  const jsx = jsonBody.map(function(node, index) {
    const nodeTag = node.t || 'p'
    const nodeContent = node.c
    const attrs = nodeTag === 'h2' ? { id: urlify(nodeContent) } : (node.a || {})

    if (nodeTag === 'picture') return <img src={node.url} loading='lazy' key={index} />
    if (commonTags.indexOf(nodeTag) !== -1) return React.createElement(nodeTag, { ...attrs, ...{ key: index } }, nodeContent)
    if (nodeTag === 'link') return <Link key={index} {...{ clientUrl, changeRoute, nodeContent }}/>
    if (nodeTag === 'float-clear') return <div key={index} className='float-clear'/>
    if (nodeTag === 'ul') return <List {...nodeContent} />

    return customNodeParser({ device, isAdmin, clientUrl, nodeTag, nodeContent, attrs, changeRoute, buildUrl, index, jsonMeta, node })
  })

  return jsx
}

export default jsonToJsxParser
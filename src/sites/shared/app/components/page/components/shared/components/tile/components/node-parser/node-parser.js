import React from 'react'
import loadable from '@loadable/component'
import urlify from '../../../../../../../../../../shared/shared/functions/transformers/routes/urlify.js'

const Link = loadable(() => import('../link/link.js'))
const List = loadable(() => import('../list/list.js'))
const RichText = loadable(() => import('./components/rich-text/rich-text.js'))

const commonTags = ['h1', 'h2', 'h3', 'h4', 'div', 'p']

const nodeParser = props => {
  const { node, index, device, isAdmin, jsonMeta, clientUrl, changeRoute, buildUrl, customNodeParser, element } = props
  const nodeTag = node.t || 'p'
  const nodeContent = node.c
  const attrs = nodeTag === 'h2' ? { id: urlify(nodeContent) } : (node.a || {})

  if (typeof node === 'string') return <RichText key={index} {...props} content={node} />
  if (commonTags.indexOf(nodeTag) !== -1) return React.createElement(nodeTag, { ...attrs, ...{ key: index } }, nodeContent)
  if (nodeTag === 'picture') return <img src={node.url} loading='lazy' key={index} />
  if (nodeTag === 'link') return <Link key={index} {...{ clientUrl, changeRoute, nodeContent }}/>
  if (nodeTag === 'float-clear') return <div key={index} className='float-clear'/>
  if (nodeTag === 'ul') return <List key={index} {...{ listNodes: nodeContent, ...props}} />
  if (nodeTag === 'rt') return <RichText key={index} {...props} content={nodeContent} element={element} />

  return customNodeParser({ device, isAdmin, clientUrl, nodeTag, nodeContent, attrs, changeRoute, buildUrl, index, jsonMeta, node })
}

export default nodeParser

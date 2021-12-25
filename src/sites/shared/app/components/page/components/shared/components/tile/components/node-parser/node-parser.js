import React from 'react'
import Link from '../link/link.js'
import List from '../list/list.js'
import urlify from '../../../../../../../../../../shared/shared/functions/transformers/routes/urlify.js'
import RichText from './components/rich-text/rich-text.js'
import TableOfContents from '../table-of-contents/table-of-contents.js'

const commonTags = ['h1', 'h2', 'h3', 'h4', 'div', 'p']

const nodeParser = props => {
  const { node, index, device, isAdmin, jsonMeta, clientUrl, changeRoute, buildUrl, customNodeParser, element } = props
  const nodeTag = node.t || 'p'
  const nodeContent = node.c
  const attrs = nodeTag === 'h2' ? { id: urlify(nodeContent) } : (node.a || {})

  if (nodeTag === 'picture') return <img src={node.url} loading='lazy' key={index} />
  if (commonTags.indexOf(nodeTag) !== -1) return React.createElement(nodeTag, { ...attrs, ...{ key: index } }, nodeContent)
  if (nodeTag === 'link') return <Link key={index} {...{ clientUrl, changeRoute, nodeContent }}/>
  if (nodeTag === 'float-clear') return <div key={index} className='float-clear'/>
  if (nodeTag === 'ul') return <List {...{ listNodes: nodeContent, ...props}} />
  if (nodeTag === 'rt') return <RichText  {...props} content={nodeContent} element={element} />
  if (nodeTag === 'toc') return <TableOfContents  {...props} />

  return customNodeParser({ device, isAdmin, clientUrl, nodeTag, nodeContent, attrs, changeRoute, buildUrl, index, jsonMeta, node })
}

export default nodeParser

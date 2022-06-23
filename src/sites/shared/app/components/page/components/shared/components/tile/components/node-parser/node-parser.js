import React from 'react'
import loadable from '@loadable/component'
import urlify from '../../../../../../../../../../shared/shared/functions/transformers/routes/urlify.js'

const Header = loadable(() => import('./components/header/header'))
const Link = loadable(() => import('../link/link.js'))
const List = loadable(() => import('../list/list.js'))
const Code = loadable(() => import('../code/code'))
const Paragraph = loadable(() => import('./components/paragraph/paragraph'))
const Image = loadable(() => import('./components/image/image'))
const PageIndexer = loadable(() => import('../../../../../index/components/page-indexer/page-indexer'))

const nodeParser = props => {
  const { node, index, device, isAdmin, jsonMeta, clientUrl, changeRoute, buildUrl, customNodeParser } = props

  const headerTags = ['h1', 'h2', 'h3', 'h4']
  const nodeTag = node.t
  const nodeContent = node.c
  const attrs = nodeTag === 'h2' ? { id: urlify(nodeContent) } : (node.a || {})
  
  if (typeof node === 'string') return <Paragraph key={index} {...props} content={node} />
  if (headerTags.indexOf(nodeTag) !== -1) return <Header key={index} {...{...node, ...props}} />
  if (node.i) return <Image key={index} {...{...node.i, ...props}} />
  if (nodeTag === 'link') return <Link key={index} {...{ clientUrl, changeRoute, nodeContent }}/>
  if (nodeTag === 'c') return <Code key={index} {...{...node, ...props}}/>
  if (nodeTag === 'float-clear') return <div key={index} className='float-clear'/>
  if (nodeTag === 'ul') return <List key={index} {...{ listNodes: nodeContent, ...props}} />
  if (nodeTag === 'PageIndexer') return <PageIndexer {...{ ...props, key: index }} />

  return customNodeParser({ device, isAdmin, clientUrl, nodeTag, nodeContent, attrs, changeRoute, buildUrl, index, jsonMeta, node })
}

export default nodeParser

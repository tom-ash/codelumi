import React from 'react'
import loadable from '@loadable/component'

const Header = loadable(() => import('./components/header/header'))
const List = loadable(() => import('../list/list.js'))
const Code = loadable(() => import('../code/code'))
const Paragraph = loadable(() => import('./components/paragraph/paragraph'))
const Image = loadable(() => import('./components/image/image'))
const PageIndexer = loadable(() => import('../../../../../index/components/page-indexer/page-indexer'))

const nodeParser = props => {
  const { node, index } = props

  const nodeTag = node.t

  if (!node) return null

  if (typeof node === 'string') {
    const paragraphProps = {
      ...props,
      content: node
    }

    return <Paragraph key={index} {...paragraphProps} />
  }

  if (node.h2) {
    const headerProps = {
      rank: 2,
      header: node.h2
    }

    return <Header key={index} {...headerProps} />
  }

  if (node.h3) {
    const headerProps = {
      rank: 3,
      header: node.h3
    }

    return <Header key={index} {...headerProps} />
  }

  if (node.h4) {
    const headerProps = {
      rank: 4,
      header: node.h4
    }

    return <Header key={index} {...headerProps} />
  }

  if (node.ul) {
    const ulProps = { listNodes: node.ul }

    return <List key={index} {...ulProps} />
  }

  if (Array.isArray(node)) {
    const ulProps = { listNodes: node }

    return <List key={index} {...ulProps} />
  }

  if (node.i) return <Image key={index} {...{...node.i, ...props}} />
  if (node.code) return <Code key={index} {...{...node, ...props}}/>
  
  if (nodeTag === 'float-clear') return <div key={index} className='float-clear'/>
  
  if (nodeTag === 'PageIndexer') return <PageIndexer {...{ ...props, key: index }} />

  return null
}

export default nodeParser

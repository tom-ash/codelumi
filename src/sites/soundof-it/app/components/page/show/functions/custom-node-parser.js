import React from 'react'
import CodeNode from '../components/code-node/code-node.js'
import CodeLink from '../components/code-link/code-link.js'
import PageIndexer from '../components/page-indexer/page-indexer'

function customNodeParser(props) {
  const { nodeTag, index, codeLang } = props

  if (nodeTag === 'c') return <CodeNode {...{ ...props, key: index }} />
  if (nodeTag === 'PageIndexer') return <PageIndexer {...{ ...props, key: index }} />

  return null
}

export default customNodeParser

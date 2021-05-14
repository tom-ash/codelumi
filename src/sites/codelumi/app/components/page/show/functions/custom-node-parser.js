import React from 'react'
import CodeNode from '../components/code-node/code-node.js'
import CodeLink from '../components/code-link/code-link.js'

function customNodeParser(props) {
  const { nodeTag, index } = props

  if (nodeTag === 'c') return <CodeNode {...props} key={index} />
  if (nodeTag === 'lc') return <CodeLink {...props} key={index} />

  return null
}

export default customNodeParser

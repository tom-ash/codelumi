import React from 'react'
import CodeNode from '../components/code-node/code-node.js'

function customNodeParser(props) {
  const { nodeTag, index } = props

  if (nodeTag === 'c') return <CodeNode {...props} key={index} />

  return null
}

export default customNodeParser

import React from 'react'
import nodeParser from '../node-parser/node-parser'

const parseNodeContent = props => {
  const { nodeContent, nodeKey } = props
  const parsedNode = typeof nodeContent === 'string' ? nodeContent : nodeParser({ ...props, node: nodeContent })

  return (
    <li key={nodeKey}>
      {parsedNode}
    </li>
  )
}

const List = props => {
  const { listNodes } = props

  return (
    <ul>
      {Object.keys(listNodes).map(nodeKey => parseNodeContent({ nodeContent: listNodes[nodeKey], nodeKey, ...props }))}
    </ul>
  )
}

export default List

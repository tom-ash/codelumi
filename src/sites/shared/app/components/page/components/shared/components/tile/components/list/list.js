import React from 'react'
import nodeParser from '../node-parser/node-parser'

const parseNodeContent = props => {
  const { nodeContent, nodeKey } = props

  if (typeof nodeContent === 'string') {
    return (
      <li key={nodeKey}>
        {nodeContent}
      </li>
    )
  }

  return nodeParser({ ...props, node: nodeContent, element: 'li' })
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

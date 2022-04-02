import React from 'react'
import nodeParser from '../node-parser/node-parser'
import Paragraph from '../node-parser/components/paragraph/paragraph'

const parseNodeContent = props => {
  const { nodeContent, nodeKey } = props

  if (typeof nodeContent === 'string') {
    return (
      <li key={nodeKey}>
        <Paragraph {...props} content={nodeContent} />
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

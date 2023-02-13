import React from 'react'
import Paragraph from '../paragraph/paragraph'

const List = (props: ListProps) => {
  const { listNodes, style } = props

  return (
    <ul style={style}>
      {listNodes.map((node, index) => {
        return (
          <li
            key={`${index}-${node}`}
          >
            <Paragraph content={node} />
          </li>
        )
      })}
    </ul>
  )
}

export default List

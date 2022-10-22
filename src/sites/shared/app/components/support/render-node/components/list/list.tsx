import React from 'react'
import Paragraph from '../paragraph/paragraph'

const List = (props: ListProps) => {
  const { listNodes, style } = props

  return (
    <ul style={style}>
      {listNodes.map(node => {
        return (
          <li key={node}>
            <Paragraph content={node} />
          </li>
        )
      })}
    </ul>
  )
}

export default List

import React from 'react'
import Paragraph from '../paragraph/paragraph'

const List = (props: ListProps) => {
  const { listNodes } = props

  return (
    <ul>
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

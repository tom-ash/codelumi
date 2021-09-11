import React from 'react'

const List = listNodes => {
  return (
    <ul>
      {Object.keys(listNodes).map(listNodeKey => (
        <li key={listNodeKey}>
          {listNodes[listNodeKey]}
        </li>
      ))}
    </ul>

  )
}

export default List

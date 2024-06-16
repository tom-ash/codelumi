import React from 'react'

interface PositionInterface {
  (props: { position: string }): React.ReactElement
}

export const Position: PositionInterface = (props) => {
  const { position } = props

  return (
    <div className='role'>
      {position}
    </div>
  )
}

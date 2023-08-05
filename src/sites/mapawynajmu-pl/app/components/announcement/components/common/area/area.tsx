import React from 'react'

interface AreaInterface {
  (props: { area: number; perSqm?: string }): React.ReactElement
}

export const Area: AreaInterface = props => {
  const {
    area,
  } = props

  return (
    <div className='area'>
      {area} m<sup>2</sup>
    </div>
  )
}

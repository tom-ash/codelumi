import React from 'react'
import Area from './components/area/area.js'
import Price from './components/price/price'

export default props => {
  return (
    <div>
      <Area {...props} />
      <Price {...props} />
    </div>
  )
}

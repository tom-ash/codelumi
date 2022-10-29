import React from 'react'
import SVG from '../../../support/components/svg/svg.js'

const Hint = ({ svg, text, classNames }) => {
  const icon = svg ? (
    <div className='icon'>
      <SVG name={svg} />
    </div>
  ) : null
  const className = ['hint'].concat(classNames || []).join(' ')

  return (
    <div className={className}>
      {icon}
      {text}
    </div>
  )
}

export default Hint

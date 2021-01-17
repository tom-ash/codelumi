import React from 'react'
import ScalableVectorGraphic from '../scalable-vector-graphic/scalable-vector-graphic'

const Header = ({
  tier,
  text,
  svgPathData
}) => {
  const icon = svgPathData ? <div className='icon'><ScalableVectorGraphic pathData={svgPathData} /></div> : null
  const tag = `h${tier}`
  const header = React.createElement(tag, {}, text)
    
  return (
    <div className='page-header'>
      {icon}
      {header}
    </div>
  )
}

export default Header


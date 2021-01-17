import React from 'react'
import ScalableVectorGraphic from '../scalable-vector-graphic/scalable-vector-graphic'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

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

// export default Header
export default withStyles(styles)(Header)

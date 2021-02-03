import React from 'react'
import SVG from '../svg/svg'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

const Header = ({
  tier,
  text,
  svgPathData,
  viewBox
}) => {
  const icon = svgPathData ? <div className='icon'><SVG viewBox={viewBox} pathData={svgPathData} /></div> : null
  const tag = `h${tier}`
  const header = React.createElement(tag, {}, text)
    
  return (
    <div className='page-header'>
      {icon}
      {header}
    </div>
  )
}

export default withStyles(styles)(Header)

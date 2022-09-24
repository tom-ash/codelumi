import React from 'react'
import SVG from '../svg/svg'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

const Header = ({
  tier,
  text,
  svg
}) => {
  const icon = svg ? <div className='icon'><SVG name={svg} /></div> : null
  const tag = `h${tier}`
  const header = React.createElement(tag, {}, <span>{text}</span>)
    
  return header
}

export default withStyles(styles)(Header)

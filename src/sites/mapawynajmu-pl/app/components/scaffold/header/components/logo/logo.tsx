import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'

interface LogoProps {
  style?: object
}

export const Logo = (props: LogoProps) => {
  useStyles(styles)

  const {
    style,
  } = props

  return (
    <div id='logo'
      style={style}
    >
      <div className='pin'></div>
      <div className='name'>
        <span>mapa</span>
        <span className='lease'>wynajmu</span>
      </div>
    </div>
  )
}

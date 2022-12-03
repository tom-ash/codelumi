import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'

export const Logo = () => {
  useStyles(styles)

  return (
    <div id='logo'>
      <div className='pin'></div>
      <div className='name'>mapawynajmu.pl</div>
    </div>
  )
}

import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

export const Logo = () => {
  useStyles(styles)

  return (
    <div id='logo'>
      <img src='https://mapawynajmupl.s3.eu-central-1.amazonaws.com/assets/mapawynajmupl-logo.jpg' />
      <div className='name'>
        <span>mapa</span>
        <span className='lease'>wynajmu</span>
      </div>
    </div>
  )
}

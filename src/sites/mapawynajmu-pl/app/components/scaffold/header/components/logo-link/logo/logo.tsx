import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

export const Logo = () => {
  useStyles(styles)

  return (
    <div id='logo'>
      <img src='https://mapawynajmupl.s3.eu-central-1.amazonaws.com/logo.jpeg' />
      <div className='title'>
        <div>mapa</div>
        <div className='lease'>wynajmu</div>
      </div>
    </div>
  )
}

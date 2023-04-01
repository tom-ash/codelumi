import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

const LogoImage = () => {
  useStyles(styles)

  return (
    <div id='logo-image'>
      <div className='marker' />
      <div className='dot' />
    </div>
  )
}

export default LogoImage

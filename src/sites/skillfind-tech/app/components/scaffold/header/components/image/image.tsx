import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

export const LogoIcon = () => {
  useStyles(styles)

  return (
    <div className='logo-icon'>
      <div className='magnifying-glass'></div>
      <div className='handle' />
    </div>
  )
}

export default LogoIcon

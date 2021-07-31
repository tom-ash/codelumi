import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'

const Logo = () => {
  useStyles(styles)

  return (
    <div id='warsaw-lease-logo'>
      <div id='warsaw'>
        WARSAW
      </div>
      <div id='lease'>
        LEASE.PL
      </div>
    </div>
  )
}

export default Logo

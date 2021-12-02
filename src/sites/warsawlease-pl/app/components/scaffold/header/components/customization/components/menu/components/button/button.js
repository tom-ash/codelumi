import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'

const HeaderMenuButton = props => {
  const { authorized, isMobile } = props

  useStyles(styles)

  return (
    <div className='menu-button' onClick={() => {
      if (authorized && isMobile) return 'TODO'

      'TODO'
    }}>
      <div/>
      <div/>
      <div/>
    </div>
  )
}

export default HeaderMenuButton

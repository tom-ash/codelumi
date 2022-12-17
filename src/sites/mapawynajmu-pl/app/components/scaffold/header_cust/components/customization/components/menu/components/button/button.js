import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

const HeaderMenuButton = props => {
  const { changeShowMenu } = props

  useStyles(styles)

  return (
    <div className='menu-button' onClick={() => changeShowMenu(true)}>
      <div />
      <div />
      <div />
    </div>
  )
}

export default HeaderMenuButton

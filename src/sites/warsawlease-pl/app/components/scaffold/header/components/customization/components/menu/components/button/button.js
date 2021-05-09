import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'
import { USER_TRACK, USER_SHOW_TRACK } from '../../../../../../../../../../shared/constants/tracks/tracks.js'
import { VISITOR_MENU_TRACK } from '../../../../../../../../../../../shared/shared/constants/tracks/tracks.js'

const HeaderMenuButton = props => {
  const { authorized, isMobile, changeRender } = props

  useStyles(styles)

  return (
    <div className='menu-button' onClick={() => {
      if (authorized && isMobile) return changeRender({ [USER_TRACK] : true, [USER_SHOW_TRACK]: true })

      changeRender({ [VISITOR_MENU_TRACK]: true })
    }}>
      <div/>
      <div/>
      <div/>
    </div>
  )
}

export default HeaderMenuButton

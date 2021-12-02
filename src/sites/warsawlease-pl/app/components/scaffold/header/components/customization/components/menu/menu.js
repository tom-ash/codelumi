import React from 'react'
import Links from '../links/links.js'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'
import Button from './components/button/button.js'
import { VISITOR_MENU_TRACK } from '../../../../../../../../../shared/shared/constants/tracks/tracks.js'

const HeaderMenu = props => {
  const { render, isMobile } = props

  useStyles(styles)

  const renderMenu = render[VISITOR_MENU_TRACK]

  return (
    <>
      {isMobile && <Button {...props}/>}
      {renderMenu &&
      <div className='menu-cover' onClick={() => 'TODO'}>
        <div className='menu'>
          <Links isMenu {...props}/>
        </div>
      </div>}
    </>
  )
}

export default HeaderMenu

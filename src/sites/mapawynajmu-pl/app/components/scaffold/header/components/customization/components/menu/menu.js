import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'
import Button from './components/button/button.js'

import { ManagedButton, ManagedLink } from 'managed-inputs'
import {
  addAnnouncementManager,
  signUpManager,
  signInManager,
  myAnnouncementsManager,
  accountManager,
  deAuthorizeManager,
} from '../links/functions/managers.js'

const HeaderMenu = props => {
  const { authorized, showMenu, changeShowMenu, isMobile } = props

  useStyles(styles)

  return (
    <>
      {isMobile && <Button {...props} />}
      {showMenu && (
        <div className='menu-cover' onClick={() => changeShowMenu(false)}>
          <div className='menu'>
            {isMobile ? (
              <>
                <ManagedLink {...addAnnouncementManager(props)} />
                {authorized ? (
                  <>
                    <ManagedLink {...myAnnouncementsManager(props)} />
                    <ManagedLink {...accountManager(props)} />
                    <ManagedButton {...deAuthorizeManager(props)} />
                  </>
                ) : (
                  <>
                    <ManagedLink {...signUpManager(props)} />
                    <ManagedLink {...signInManager(props)} />
                  </>
                )}
              </>
            ) : (
              <>
                <ManagedLink {...myAnnouncementsManager(props)} />
                <ManagedLink {...accountManager(props)} />
                <ManagedButton {...deAuthorizeManager(props)} />
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default HeaderMenu

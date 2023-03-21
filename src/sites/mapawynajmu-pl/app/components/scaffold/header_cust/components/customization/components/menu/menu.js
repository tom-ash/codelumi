import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import Button from './components/button/button'
import { ListingNewLink } from '../links/components/listing-new-link'
import { UserListingIndexLink } from '../links/components/user-listing-index'
import { UserEditLink } from '../links/components/user-edit.link'

import { ManagedButton, ManagedLink } from 'managed-inputs'
import {
  accountManager,
  deAuthorizeManager,
} from '../links/functions/managers'

const HeaderMenu = props => {
  const { authorized, showMenu, changeShowMenu, isMobile } = props

  useStyles(styles)

  return (
    <>
      {isMobile && <Button {...props} />}
      {showMenu && (
        <div
          className='menu-cover'
          onClick={() => changeShowMenu(false)}
        >
          <div className='menu'>
            {isMobile ? (
              <>
                <ListingNewLink />
                {authorized ? (
                  <>
                    <UserListingIndexLink />
                    <UserEditLink />


                    <ManagedButton {...deAuthorizeManager(props)} />
                  </>
                ) : (
                  <>
                    {/* <ManagedLink {...signUpManager(props)} /> */}
                    {/* TODO: SIGN IN */}
                  </>
                )}
              </>
            ) : (
              <>
                <UserListingIndexLink />
                <UserEditLink />


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

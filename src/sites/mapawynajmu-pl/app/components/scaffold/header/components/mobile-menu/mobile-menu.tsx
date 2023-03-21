import React from 'react'
import { useStore } from '../../../../../../../shared/app/functions/store/useStore'
import { ShowButton } from './components/show-button/show-button'
import { ListingNewLink } from '../links/components/listing-new-link'
import { UserNewLink } from '../links/components/user-new-link'
import { SignInLink } from '../links/components/sign-in'
import { UserEditLink } from '../links/components/user-edit.link'
import { SignOutButton } from '../links/components/sign-out-button'
import { UserListingIndexLink } from '../links/components/user-listing-index'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

export const MobileMenu = () => {
  const { state, dispatch } = useStore()
  const { user, control } = state
  const { authorized } = user
  const { showMobileMenu } = control
  const hideMobileMenuMenu = () => dispatch({ type: 'control', value: { showMobileMenu: false } })

  useStyles(styles)

  return (
    <>
      <ShowButton />
      {showMobileMenu && (
        <div
          className='menu-cover'
          onClick={hideMobileMenuMenu}
        >
          <div className='menu mobile'>
            <ListingNewLink />
            {authorized ? (
              <>
                <UserListingIndexLink />
                <UserEditLink />
                <SignOutButton />
              </>
            ) : (
              <>
                <UserNewLink />
                <SignInLink />
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

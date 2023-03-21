import React from 'react'
import { ListingNewLink } from '../links/components/listing-new-link'
import { UserListingIndexLink } from '../links/components/user-listing-index'
import { UserEditLink } from '../links/components/user-edit.link'
import { useStore } from '../../../../../../../shared/app/functions/store/useStore'
import { SignOutButton } from '../links/components/sign-out-button'

export const MyAccountMenu = () => {
  const { dispatch } = useStore()
  const hideMyAccountMenu = () => dispatch({ type: 'control', value: { showMyAccountMenu: false } })

  return (
    <div
      className='menu-cover'
      onClick={hideMyAccountMenu}
    >
      <div className='menu my-account'>
        <ListingNewLink />
        <UserListingIndexLink />
        <UserEditLink />
        <SignOutButton />
      </div>
    </div>
  )
}

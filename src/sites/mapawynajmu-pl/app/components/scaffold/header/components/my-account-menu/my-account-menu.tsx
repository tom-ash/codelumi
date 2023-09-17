import React from 'react'
import { ListingNewLink } from '../links/components/listing-new-link'
import { UserListingIndexLink } from '../links/components/user-listing-index'
import { UserEditLink } from '../links/components/user-edit.link'
import { SignOutButton } from '../links/components/sign-out-button'
import { useDispatch } from 'react-redux'

export const MyAccountMenu = () => {
  const dispatch = useDispatch()
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

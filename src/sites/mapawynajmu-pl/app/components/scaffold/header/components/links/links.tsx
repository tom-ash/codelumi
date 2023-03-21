import React from 'react'
import { VisitorPageIndexLink } from './components/visitor-page-index.link'
import { SignInLink } from './components/sign-in'
import { ListingNewLink } from './components/listing-new-link'
import { UserNewLink } from './components/user-new-link'
import { MyAccountControlButton } from './components/my-account.control-button'
import { useStore } from '../../../../../../../shared/app/functions/store/useStore'

const UserLinks = () => {
  const { state } = useStore()
  const { user } = state
  const { authorized } = user

  return (
    <>
      {authorized ? (
        <MyAccountControlButton />
      ) : (
        <>
          <UserNewLink />
          <SignInLink />
        </>
      )}
    </>
  )
}

export const Links = () => {
  return (
    <div className='links'>
      <ListingNewLink />
      <UserLinks />
      <VisitorPageIndexLink />
    </div>
  )
}

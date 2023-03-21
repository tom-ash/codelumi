import React from 'react'
import { ManagedButton, ManagedLink } from 'managed-inputs'
import { myAccountManager } from './functions/managers'
import { LangSwitch } from '../../../../../../../../../shared/app/components/support/lang-switch/lang-switch'
import { VisitorPageIndexLink } from './components/visitor-page-index.link'
import { SignInLink } from './components/sign-in'
import { ListingNewLink } from './components/listing-new-link'
import { UserNewLink } from './components/user-new-link'
import { UserEditLink } from './components/user-edit.link'

const HeaderUserLinks = props => {
  const { authorized } = props

  return (
    <>
      {authorized ? (
        <ManagedButton {...myAccountManager(props)} />
      ) : (
        <>
          <UserNewLink />
          <SignInLink />
        </>
      )}
    </>
  )
}

const HeaderLinks = props => {
  const { isMobile } = props

  return (
    <div className='links'>
      {isMobile ? (
        <LangSwitch />
      ) : (
        <>
          <ListingNewLink />
          <HeaderUserLinks {...props} />
          <VisitorPageIndexLink />
          <LangSwitch />
        </>
      )}
    </div>
  )
}

export default HeaderLinks

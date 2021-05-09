import React from 'react'
import { ManagedLink } from 'managed-inputs'

export function linksProvider(props) {
  const { authorized, addAnnouncementManager, signUpManager, signInManager, myAccountManager } = props

  if (authorized) {
    return (
      <>
        <ManagedLink {...addAnnouncementManager(props)} />
        <ManagedLink {...myAccountManager(props)} />
      </>
    )
  }

  return (
    <>
      <ManagedLink key='add-announcement' {...addAnnouncementManager(props)} />
      <ManagedLink key='sign-up' {...signUpManager(props)} />
      <ManagedLink key='sign-in' {...signInManager(props)} />
    </>
  )
}

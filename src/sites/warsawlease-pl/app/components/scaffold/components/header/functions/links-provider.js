import React from 'react'
import { ManagedLink } from 'managed-inputs'

export function linksProvider({ authorized }) {
  if (authorized) {
    return (
      <>
        <ManagedLink {...this.addAnnouncementManager()} />
        <ManagedLink {...this.myAccountManager()} />
      </>
    )
  }

  return (
    <>
      <ManagedLink key='add-announcement' {...this.addAnnouncementManager()} />
      <ManagedLink key='sign-up' {...this.signUpManager()} />
      <ManagedLink key='sign-in' {...this.signInManager()} />
    </>
  )
}

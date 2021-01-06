import React from 'react'
import { ManagedLink } from 'managed-inputs'

export function linksProvider({ authorized }) {
  if (authorized) {
    return <ManagedLink {...this.myAccountManager()} />
  }

  return (
    <>
      <ManagedLink {...this.signUpManager()} />
      <ManagedLink {...this.signInManager()} />
    </>
  )
}

import React from 'react'
import { useStore } from '../../../../../../../../../shared/app/functions/store/useStore'
import { ManagedButton } from 'managed-inputs'
import { signOut } from '../../../../../../user/components/auth/components/sign-out/functions/sign-out'

export const SignOutButton = () => {
  const { state } = useStore()
  const { texts, links } = state
  const { signOutButtonLabel: label } = texts
  const href = links && links.root && links.root.href
  const classNames = { container: 'header-link de-authorize' }
  const onClick = () => signOut({ href })

  const buttonProps = {
    classNames,
    label,
    onClick,
  }

  return <ManagedButton {...buttonProps} />
}

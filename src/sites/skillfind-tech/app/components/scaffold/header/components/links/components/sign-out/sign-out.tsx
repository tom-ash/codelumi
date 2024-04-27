import React from 'react'
import { ManagedButton } from 'managed-inputs'
import { signOut } from '../../../../../../user/components/auth/components/sign-out/functions/sign-out'
import { useTexts } from '../../../../../../../../../shared/app/functions/store/use-texts'
import { useLinks } from '../../../../../../../../../shared/app/functions/store/use-links'
import { SVG } from '../../../../../../../../../shared/app/components/support/svg/svg'

export const SignOutButton = () => {
  const { signOutButtonLabel } = useTexts()
  const links = useLinks()
  const href = links && links.root && links.root.href
  const classNames = { container: 'sign-out' }
  const onClick = () => signOut({ href })


  const label = <><SVG name={'signOut'} />{signOutButtonLabel}</>

  const buttonProps = {
    classNames,
    label,
    onClick,
  }

  return <ManagedButton {...buttonProps} />
}

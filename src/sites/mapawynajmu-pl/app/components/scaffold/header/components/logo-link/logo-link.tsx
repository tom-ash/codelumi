import React from 'react'
import { Link } from '../../../../../../../shared/app/components/support/link/link'
import { Logo } from './logo/logo'

export const LogoLink = () => {
  const label = <Logo />

  const linkProps = {
    linkKey: 'root',
    label,
    customClassNames: 'logo',
  }

  return <Link {...linkProps} />
}

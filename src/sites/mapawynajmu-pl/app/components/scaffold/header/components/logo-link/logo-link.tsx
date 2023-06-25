import React from 'react'
import { Link } from '../../../../../../../shared/app/components/support/link/link'
import { LogoAndTitle } from '../../../../support/logo-and-title/logo-and-title'

export const LogoLink = () => {
  const label = <LogoAndTitle />

  const linkProps = {
    linkKey: 'root',
    label,
    customClassNames: 'logo',
  }

  return <Link {...linkProps} />
}

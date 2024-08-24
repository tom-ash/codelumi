import React from 'react'
import { DeprecatedLink } from '../../../../../../../shared/app/components/support/deprecated-link/deprecated-link'
import { ExtendedLogo } from '../../../../support/extended-logo/extended-logo'

export const LogoLink = () => {
  const label = <ExtendedLogo scale={0.1} />

  const linkProps = {
    linkKey: 'root',
    label,
    customClassNames: 'logo',
  }

  return <DeprecatedLink {...linkProps} />
}

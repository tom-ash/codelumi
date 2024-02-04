import React from 'react'
import { Link } from '../../../../../../../shared/app/components/support/link/link'
import { ExtendedLogo } from '../../../../support/extended-logo/extended-logo'

export const LogoLink = () => {
  const label = <ExtendedLogo scale={0.1}/>

  const linkProps = {
    linkKey: 'root',
    label,
    customClassNames: 'logo',
  }

  return <Link {...linkProps} />
}

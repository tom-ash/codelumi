import React from 'react'
import { DeprecatedLink } from '../../../../../../../shared/app/components/support/deprecated-link/deprecated-link'

export const PrivacyPolicyLink = () => {
  const linkProps = {
    linkKey: 'visitor/privacy-policy',
    customClassNames: 'link',
  }

  return <DeprecatedLink {...linkProps} />
}

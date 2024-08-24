import React from 'react'
import { DeprecatedLink } from '../../../../../../../../shared/app/components/support/deprecated-link/deprecated-link'

export const SignInLink = () => {
  const linkProps = {
    linkKey: 'user/auth',
    customClassNames: 'header-link',
  }

  return <DeprecatedLink {...linkProps} />
}

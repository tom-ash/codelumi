import React from 'react'
import { DeprecatedLink } from '../../../../../../../../shared/app/components/support/deprecated-link/deprecated-link'

export const UserEditLink = () => {
  const linkProps = {
    linkKey: 'user/edit',
    customClassNames: 'header-link',
  }

  return <DeprecatedLink {...linkProps} />
}

import React from 'react'
import { DeprecatedLink } from '../../../../../../../../shared/app/components/support/deprecated-link/deprecated-link'

export const UserNewLink = () => {
  const linkProps = {
    linkKey: 'user/new/form',
    customClassNames: 'header-link',
  }

  return <DeprecatedLink {...linkProps} />
}

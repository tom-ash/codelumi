import React from 'react'
import { DeprecatedLink } from '../../../../../../../../shared/app/components/support/deprecated-link/deprecated-link'

export const VisitorPageIndexLink = () => {
  const linkProps = {
    linkKey: 'visitorPageIndex',
    customClassNames: 'header-link',
  }

  return <DeprecatedLink {...linkProps} />
}

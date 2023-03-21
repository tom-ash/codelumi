import React from 'react'
import { Link } from '../../../../../../../../../../shared/app/components/support/link/link'

export const VisitorPageIndexLink = () => {
  const linkProps = {
    linkKey: 'visitorPageIndex',
    customClassNames: 'header-link',
  }

  return <Link {...linkProps} />
}

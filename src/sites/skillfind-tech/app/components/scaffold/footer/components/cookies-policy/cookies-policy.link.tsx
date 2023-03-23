import React from 'react'
import { Link } from '../../../../../../../shared/app/components/support/link/link'

export const CookiesPolicyLink = () => {
  const linkProps = {
    linkKey: 'visitor/cookies-policy',
    customClassNames: 'link',
  }

  return <Link {...linkProps} />
}

import React from 'react'
import { Link } from '../../../../../../../shared/app/components/support/link/link'

export const TermsOfServiceLink = () => {
  const linkProps = {
    linkKey: 'visitor/terms-of-service',
    customClassNames: 'link',
  }

  return <Link {...linkProps} />
}

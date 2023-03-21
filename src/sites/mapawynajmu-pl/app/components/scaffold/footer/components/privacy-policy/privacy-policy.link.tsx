import React from 'react'
import { Link } from '../../../../../../../shared/app/components/support/link/link'

export const PrivacyPolicyLink = () => {
  const linkProps = {
    linkKey: 'visitor/privacy-policy',
    customClassNames: 'link',
  }

  return <Link {...linkProps} />
}

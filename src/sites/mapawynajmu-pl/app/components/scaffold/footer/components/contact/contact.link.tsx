import React from 'react'
import { DeprecatedLink } from '../../../../../../../shared/app/components/support/deprecated-link/deprecated-link'

export const ContactLink = () => {
  const linkProps = {
    linkKey: 'visitor/contact',
    customClassNames: 'link',
  }

  return <DeprecatedLink {...linkProps} />
}

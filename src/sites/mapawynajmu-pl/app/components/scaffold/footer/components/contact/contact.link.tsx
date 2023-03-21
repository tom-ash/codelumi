import React from 'react'
import { Link } from '../../../../../../../shared/app/components/support/link/link'

export const ContactLink = () => {
  const linkProps = {
    linkKey: 'visitor/contact',
    customClassNames: 'link',
  }

  return <Link {...linkProps} />
}

import React from 'react'
import { Link } from '../../../../../../../../../shared/app/components/support/link/link'

export const SignUpLink = () => {
  const linkProps = {
    linkKey: 'user/new/form',
    customClassNames: 'header-link',
  }

  return <Link {...linkProps} />
}

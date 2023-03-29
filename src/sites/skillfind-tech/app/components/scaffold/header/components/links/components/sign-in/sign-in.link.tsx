import React from 'react'
import { Link } from '../../../../../../../../../shared/app/components/support/link/link'

export const SignInLink = () => {
  const linkProps = {
    linkKey: 'user/auth',
    customClassNames: 'header-link',
  }

  return <Link {...linkProps} />
}

import React from 'react'
import { Link } from '../../../../../../../../../../shared/app/components/support/link/link'

export const UserEditLink = () => {
  const linkProps = {
    linkKey: 'user/edit',
    customClassNames: 'header-link',
  }

  return <Link {...linkProps} />
}

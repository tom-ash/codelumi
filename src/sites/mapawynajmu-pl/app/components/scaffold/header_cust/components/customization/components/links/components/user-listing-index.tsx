import React from 'react'
import { Link } from '../../../../../../../../../../shared/app/components/support/link/link'

export const UserListingIndexLink = () => {
  const linkProps = {
    linkKey: 'announcement/index/user',
    customClassNames: 'header-link',
  }

  return <Link {...linkProps} />
}

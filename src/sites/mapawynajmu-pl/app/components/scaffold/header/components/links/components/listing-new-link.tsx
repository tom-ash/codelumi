import React from 'react'
import { Link } from '../../../../../../../../shared/app/components/support/link/link'

export const ListingNewLink = () => {
  const linkProps = {
    linkKey: 'announcement/create/form',
    customClassNames: 'header-link add-announcement',
  }

  return <Link {...linkProps} />
}

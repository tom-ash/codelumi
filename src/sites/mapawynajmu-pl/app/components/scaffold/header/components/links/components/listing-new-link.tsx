import React from 'react'
import { Link } from '../../../../../../../../shared/app/components/support/link/link'

export const ListingNewLink = () => {
  const linkProps = {
    linkKey: 'listings/new/form',
    customClassNames: 'header-link add-announcement',
  }

  return <Link {...linkProps} />
}

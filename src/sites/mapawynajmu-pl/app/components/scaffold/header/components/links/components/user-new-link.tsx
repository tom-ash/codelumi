import React from 'react'
import { Link } from '../../../../../../../../shared/app/components/support/link/link'

export const UserNewLink = () => {
  const linkProps = {
    linkKey: 'user/new/form',
    customClassNames: 'header-link',
  }

  return <Link {...linkProps} />
}

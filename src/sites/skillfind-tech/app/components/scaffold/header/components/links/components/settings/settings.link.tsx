import React from 'react'
import { Link } from '../../../../../../../../../shared/app/components/support/link/link'

export const SettingsLink = () => {
  const linkProps = {
    linkKey: 'user/users/edit',
    customClassNames: 'settings',
  }

  return <Link {...linkProps} />
}

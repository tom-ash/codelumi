import React from 'react'
import { Link } from '../../../../../../../shared/app/components/support/link/link'

export const PrivacySettingsLink = () => {
  const linkProps = {
    linkKey: 'visitor/privacy-settings',
    customClassNames: 'link',
  }

  return <Link {...linkProps} />
}

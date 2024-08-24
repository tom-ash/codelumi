import React from 'react'
import { DeprecatedLink } from '../../../../../../../../../shared/app/components/support/deprecated-link/deprecated-link'
import { useApp } from '../../../../../../../../../shared/app/functions/store/use-app'

export const PrivacySettingsLink = () => {
  const app = useApp()
  const lang = app.lang as Lang
  const linkProps = {
    linkKey: 'visitor/privacy-settings',
    customClassNames: 'link',
    label: { pl: 'Ustawienia', en: 'Settings' }[lang],
  }

  return <DeprecatedLink {...linkProps} />
}

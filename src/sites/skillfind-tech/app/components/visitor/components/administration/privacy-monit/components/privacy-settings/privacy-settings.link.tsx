import React from 'react'
import { useStore } from '../../../../../../../../../shared/app/functions/store/useStore'
import { Link } from '../../../../../../../../../shared/app/components/support/link/link'

export const PrivacySettingsLink = () => {
  const { state } = useStore()
  const { app } = state
  const lang = app.lang as Lang
  const linkProps = {
    linkKey: 'visitor/privacy-settings',
    customClassNames: 'link',
    label: { pl: 'Ustawienia', en: 'Settings' }[lang]
  }

  return <Link {...linkProps} />
}

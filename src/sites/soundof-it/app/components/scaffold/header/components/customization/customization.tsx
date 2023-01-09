import React from 'react'
import Links from './components/links/links'
import { LangSwitch } from '../../../../../../../shared/app/components/support/lang-switch/lang-switch'

// @ts-ignore
export const HeaderCustomization = props => {
  const { links, lang, buildUrl, changeRoute } = props

  const langSwitchProps = {
    links,
    lang,
    buildUrl,
    changeRoute,
  }

  return (
    <>
      <Links {...props} />
      <LangSwitch {...langSwitchProps} />
    </>
  )
}

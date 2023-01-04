import React from 'react'
import Links from './components/links/links'
import { LangSwitch } from '../../../../../../../shared/app/components/support/lang-switch/lang-switch'

// @ts-ignore
export const HeaderCustomization = props => {
  console.log(props)

  const {
    links,
    lang,
    buildUrl,
    changeRoute
  } = props

  const langSwitchProps = {
    links,
    lang,
    buildUrl,
    changeRoute
  }

  console.log(langSwitchProps)

  return (
    <>
      <Links {...props} />
      <LangSwitch {...langSwitchProps} />
    </>
  )
}

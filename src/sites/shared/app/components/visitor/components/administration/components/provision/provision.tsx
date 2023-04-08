import React from 'react'
import { FloatClear } from '../../../../../../../../shared/app/components/support/float-clear/float-clear'

interface ProvisionInterface {
  lang: Lang
  tier: string
  item: string
  pl: JSX.Element
  en: JSX.Element
}

export const Provision = (props: ProvisionInterface) => {
  const { tier, item, lang, [lang]: text } = props

  return (
    <div className={`provision ${tier}`}>
      <div className='indent' />
      <div className='mark'>{item}</div>
      <div className='text'>{text}</div>
      <FloatClear />
    </div>
  )
}

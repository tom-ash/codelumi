import React from 'react'
import { useStore } from '../../../../../../../../../shared/app/functions/store/useStore'
import { ManagedRadio } from 'managed-inputs'
import { saveCookie } from '../../../../../../../../../mapawynajmu-pl/app/functions/cookie-handlers'

export const MarketingConsentRadio = () => {
  const { state, dispatch } = useStore()
  
  const { visitor } = state
  const { marketingConsent } = visitor
  const name = 'marketing-consent'
  const classNames = { container: 'form-input radio' }
  const checked = marketingConsent
  const radios = [
    { value: true, label: 'Zgadzam się' },
    { value: false, label: 'Nie zgadzam się' },
  ]
  const setVisitor = (value: any) => dispatch({ type: 'visitor', value })
  const onClick = (value: boolean) => {
    setVisitor({ marketingConsent: value })
    saveCookie('_pdpsm', value, 'oneYear')
  }

  const radioProps = {
    name,
    classNames,
    checked,
    radios,
    onClick,
  }

  return <ManagedRadio {...radioProps} />
}

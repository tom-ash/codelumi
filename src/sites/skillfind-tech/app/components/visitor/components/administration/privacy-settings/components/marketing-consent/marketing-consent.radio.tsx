import React from 'react'
import { useStore } from '../../../../../../../../../shared/app/functions/store/useStore'
import { ManagedRadio } from 'managed-inputs'

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
    const consent = JSON.parse(localStorage.getItem('consent') as string)
    const updatedConsent = { ...consent, ad_storage: value ? 'granted' : 'declined' }

    // @ts-ignore
    window.gtag('consent', 'update', updatedConsent);  
    localStorage.setItem('consent', JSON.stringify(updatedConsent));
    setVisitor({ marketingConsent: value })
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

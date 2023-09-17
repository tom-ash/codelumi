import React from 'react'
import { ManagedRadio } from 'managed-inputs'
import { useVisitor } from '../../../../../../../../../shared/app/functions/store/use-visitor'
import { useDispatch } from 'react-redux'

export const MarketingConsentRadio = () => {
  const { marketingConsent } = useVisitor()
  const dispatch = useDispatch()
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
    window.gtag('consent', 'update', updatedConsent)
    localStorage.setItem('consent', JSON.stringify(updatedConsent))
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

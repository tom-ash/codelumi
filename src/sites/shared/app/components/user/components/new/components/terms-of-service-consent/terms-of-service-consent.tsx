import React from 'react'
import { useStore } from 'react-redux'
import { TermsOfServiceConsentCheckbox } from './terms-of-service-consent.checkbox'

export const TermsOfServiceConsent = () => {
  const { texts, errors } = useStore().getState()
  const { termsOfServiceConsentNotGrantedError } = texts
  const { termsOfServiceConsent: termsOfServiceConsentErrorTriggered } = errors

  return (
    <div className='terms-of-service-consent'>
      <TermsOfServiceConsentCheckbox />
      {termsOfServiceConsentErrorTriggered && <div className='error'>{termsOfServiceConsentNotGrantedError}</div>}
    </div>
  )
}

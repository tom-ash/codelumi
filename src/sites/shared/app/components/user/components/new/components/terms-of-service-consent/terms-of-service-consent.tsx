import React from 'react'
import { TermsOfServiceConsentCheckbox } from './terms-of-service-consent.checkbox'
import { useStore } from '../../../../../../functions/store/useStore'

export const TermsOfServiceConsent = () => {
  const { state } = useStore()
  const { texts, errors } = state
  const { termsOfServiceConsentNotGrantedError } = texts
  const { termsOfServiceConsent: termsOfServiceConsentErrorTriggered } = errors

  return (
    <div className='terms-of-service-consent'>
      <TermsOfServiceConsentCheckbox />
      {termsOfServiceConsentErrorTriggered && <div className='error'>{termsOfServiceConsentNotGrantedError}</div>}
    </div>
  )
}

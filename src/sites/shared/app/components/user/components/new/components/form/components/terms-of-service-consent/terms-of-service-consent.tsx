import React from 'react'
import { TermsOfServiceConsentCheckbox } from './terms-of-service-consent.checkbox'
import { useTexts } from '../../../../../../../../functions/store/use-texts'
import { useErrors } from '../../../../../../../../functions/store/use-errors'

export const TermsOfServiceConsent = () => {
  const { termsOfServiceConsentNotGrantedError } = useTexts()
  const { termsOfServiceConsent: termsOfServiceConsentErrorTriggered } = useErrors()

  return (
    <div
      id='terms-of-service-consent'
      className='terms-of-service-consent'
    >
      <TermsOfServiceConsentCheckbox />
      {termsOfServiceConsentErrorTriggered && <div className='error'>{termsOfServiceConsentNotGrantedError}</div>}
    </div>
  )
}

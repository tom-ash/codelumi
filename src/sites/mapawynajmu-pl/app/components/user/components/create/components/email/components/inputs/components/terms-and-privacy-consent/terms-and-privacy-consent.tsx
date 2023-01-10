import React from 'react'
import { Dispatch } from 'redux'
import { TermsAndPrivacyConsentCheckbox } from './terms-and-privacy-consent.checkbox'

interface TermsAndPrivacyConsentProps {
  termsAndPrivacyConsent: string
  termsAndPrivacyConsentError: LangObject
  langHandler: LangHandler
  dispatch: Dispatch
  links: any
}

export const TermsAndPrivacyConsent = (props: TermsAndPrivacyConsentProps) => {
  const {
    termsAndPrivacyConsent,
    termsAndPrivacyConsentError,
    links,
    langHandler,
    dispatch,
  } = props

  const termsAndPrivacyConsentCheckboxProps = {
    termsAndPrivacyConsent,
    links,
    langHandler,
    dispatch,
  }

  // @ts-ignore
  const termsAndPrivacyConsentLocalizedError = langHandler(termsAndPrivacyConsentError)

  console.log(termsAndPrivacyConsentError)

  return (
    <div id='user-create-consents-container'>
      <TermsAndPrivacyConsentCheckbox {...termsAndPrivacyConsentCheckboxProps}/>
      {termsAndPrivacyConsentLocalizedError && (
        <div className='error'>{termsAndPrivacyConsentLocalizedError}</div>
      )}
    </div>
  )
}

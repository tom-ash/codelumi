import React from 'react'
import { ManagedCheckbox } from 'managed-inputs'
import { Dispatch } from 'redux'
import { termsAndServiceConsentValidator } from './terms-and-privacy-consent.validator'
import { TermsAndPrivacyConsentLabel } from './terms-and-privacy-consent.label'
import { buildUrl } from '../../../../../../../../../../../shared/functions/builders/url'

interface TermsAndPrivacyConsentCheckboxProps {
  termsAndPrivacyConsent: string
  links: any
  langHandler: LangHandler
  dispatch: Dispatch
}

export const TermsAndPrivacyConsentCheckbox = (props: TermsAndPrivacyConsentCheckboxProps) => {
  const { termsAndPrivacyConsent, links, langHandler, dispatch } = props

  const termsAndPrivacyConsentLabelProps = {
    links,
    langHandler,
    buildUrl,
  }

  const classNames = { container: 'form-input checkbox' }
  const checked = termsAndPrivacyConsent
  const label = <TermsAndPrivacyConsentLabel {...termsAndPrivacyConsentLabelProps} />
  const onClick = (termsAndPrivacyConsent: boolean) => {
    dispatch({ type: 'inputs', value: { termsAndPrivacyConsent } })
    termsAndServiceConsentValidator({ termsAndPrivacyConsent, dispatch })
  }

  const termsAndPrivacyConsentCheckboxProps = {
    classNames,
    checked,
    label,
    onClick,
  }

  return <ManagedCheckbox {...termsAndPrivacyConsentCheckboxProps} />
}

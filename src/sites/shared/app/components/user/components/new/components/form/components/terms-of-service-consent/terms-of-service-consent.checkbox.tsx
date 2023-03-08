import React from 'react'
import { ManagedCheckbox } from 'managed-inputs'
import { termsOfServiceConsentValidator } from './terms-of-service-consent.validator'
import { TermsOfServiceConsentLabel } from './terms-of-service-consent.label'
import { useStore } from '../../../../../../../../functions/store/useStore'

export const TermsOfServiceConsentCheckbox = () => {
  const { state, dispatch } = useStore()
  const { texts, links, inputs } = state
  const { termsOfServiceConsent } = inputs
  const {
    termsOfServiceConsentSyntheticLabel,
    termsOfService,
  } = texts
  const classNames = { container: 'form-input checkbox' }
  const checked = termsOfServiceConsent
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const setErrors = (value: any) => dispatch({ type: 'errors', value })
  const onClick = (termsOfServiceConsent: boolean) => {
    setInputs({ termsOfServiceConsent })
    termsOfServiceConsentValidator({ termsOfServiceConsent, setErrors })
  }
  const labelProps = {
    syntheticLabel: termsOfServiceConsentSyntheticLabel,
    termsOfServiceLink: links['visitor/terms-of-service'],
    termsOfService: termsOfService,
  }
  const label = <TermsOfServiceConsentLabel {...labelProps} />
  const termsOfServiceConsentCheckboxProps = {
    classNames,
    checked,
    label,
    onClick,
  }

  return <ManagedCheckbox {...termsOfServiceConsentCheckboxProps} />
}

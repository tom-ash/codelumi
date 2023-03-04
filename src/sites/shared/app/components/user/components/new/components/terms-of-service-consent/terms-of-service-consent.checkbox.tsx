import React from 'react'
import { useStore, useDispatch } from 'react-redux'
import { ManagedCheckbox } from 'managed-inputs'
import { termsOfServiceConsentValidator } from './terms-of-service-consent.validator'
import { TermsOfServiceConsentLabel } from './terms-of-service-consent.label'

export const TermsOfServiceConsentCheckbox = () => {
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const setErrors = (value: any) => dispatch({ type: 'errors', value })
  const { texts, links, inputs } = useStore().getState()
  const { termsOfServiceConsent } = inputs
  const {
    termsOfServiceConsentCheckboxSyntheticLabel,
    termsOfService,
  } = texts
  const classNames = { container: 'form-input checkbox' }
  const checked = termsOfServiceConsent
  const onClick = (termsOfServiceConsent: boolean) => {
    setInputs({ termsOfServiceConsent })
    termsOfServiceConsentValidator({ termsOfServiceConsent, setErrors })
  }
  const labelProps = {
    syntheticLabel: termsOfServiceConsentCheckboxSyntheticLabel,
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

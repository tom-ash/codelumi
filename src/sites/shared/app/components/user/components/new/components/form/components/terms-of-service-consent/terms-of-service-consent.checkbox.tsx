import React from 'react'
import { ManagedCheckbox } from 'managed-inputs'
import { termsOfServiceConsentValidator } from './terms-of-service-consent.validator'
import { TermsOfServiceConsentLabel } from './terms-of-service-consent.label'
import { useInputs } from '../../../../../../../../functions/store/use-inputs'
import { useTexts } from '../../../../../../../../functions/store/use-texts'
import { useLinks } from '../../../../../../../../functions/store/use-links'
import { useDispatch } from 'react-redux'

export const TermsOfServiceConsentCheckbox = () => {
  const dispatch = useDispatch()
  const { termsOfServiceConsent } = useInputs()
  const { termsOfServiceConsentSyntheticLabel, termsOfService } = useTexts()
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
    termsOfServiceLink: useLinks()['visitor/terms-of-service'],
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

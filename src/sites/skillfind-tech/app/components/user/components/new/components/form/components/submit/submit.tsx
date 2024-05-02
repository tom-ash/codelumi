import React from 'react'
import { SubmitButton } from '../../../../../../../../../../shared/app/components/support/submit-button/submit-button'
import { submitForm } from './functions/submit-form'
import { useTexts } from '../../../../../../../../../../shared/app/functions/store/use-texts'
import { useInputs } from '../../../../../../../../../../shared/app/functions/store/use-inputs'

export const Submit = () => {
  const {
    submitFormButtonLabel: label,
    termsOfServiceConsentLabel,
    businessNameInputInvalidError: businessNameError,
    logoInputMissingError: logoError,
  } = useTexts()
  const { emailAddress, password, termsOfServiceConsent, logo, businessName, industry } = useInputs()

  const submitButtonProps = {
    label,
    businessName,
    businessNameError,
    industry,
    logo,
    logoError,
    emailAddress,
    password,
    termsOfServiceConsent,
    termsOfServiceConsentLabel,
    submit: submitForm,
  }

  return <SubmitButton {...submitButtonProps} />
}

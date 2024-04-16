import React from 'react'
import { SubmitButton } from '../../../../../../../../../../../shared/app/components/support/submit-button/submit-button'
import { submitForm } from '../functions/submit-form'
import { useTexts } from '../../../../../../../../../../../shared/app/functions/store/use-texts'
import { useInputs } from '../../../../../../../../../../../shared/app/functions/store/use-inputs'

export const SubmitFormButton = () => {
  const {
    submitFormButtonLabel: label,
    termsOfServiceConsentLabel,
    businessNameInputInvalidError: businessNameError,
  } = useTexts()
  const { emailAddress, password, termsOfServiceConsent, logo, businessName, industry } = useInputs()

  const submitButtonProps = {
    label,
    businessName,
    businessNameError,
    industry,
    logo,
    emailAddress,
    password,
    termsOfServiceConsent,
    termsOfServiceConsentLabel,
    submit: submitForm,
  }

  return <SubmitButton {...submitButtonProps} />
}

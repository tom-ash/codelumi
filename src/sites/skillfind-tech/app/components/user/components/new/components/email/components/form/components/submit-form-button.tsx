import React from 'react'
import { useStore } from '../../../../../../../../../../../shared/app/functions/store/useStore'
import { SubmitButton } from '../../../../../../../../../../../shared/app/components/support/submit-button/submit-button'
import { submitForm } from '../functions/submit-form'

export const SubmitFormButton = () => {
  const { state } = useStore()
  const { texts, inputs } = state
  const { submitFormButtonLabel: label, termsOfServiceConsentLabel } = texts
  const { emailAddress, password, termsOfServiceConsent } = inputs

  const submitButtonProps = {
    label,
    emailAddress,
    password,
    termsOfServiceConsent,
    termsOfServiceConsentLabel,
    submit: submitForm,
  }

  return <SubmitButton {...submitButtonProps} />
}

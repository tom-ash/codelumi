import React from 'react'
import { useStore } from '../../../../../../../../../../../shared/app/functions/store/useStore'
import { SubmitButton } from '../../../../../../../../../../../shared/app/components/support/submit-button/submit-button'
import { submitForm } from '../functions/submit-form'

export const SubmitFormButton = () => {
  const { state } = useStore()
  const { app, texts, inputs } = state
  const { lang } = app
  const { submitFormButtonLabel: label, termsOfServiceConsentLabel } = texts
  const { emailAddress, password, termsOfServiceConsent } = inputs

  const submitButtonProps = {
    label,
    lang,
    emailAddress,
    password,
    termsOfServiceConsent,
    termsOfServiceConsentLabel,
    submit: submitForm,
  }

  return <SubmitButton {...submitButtonProps} />
}

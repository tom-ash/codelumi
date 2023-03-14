import React from 'react'
import { useStore } from '../../../../../../../../../../../shared/app/functions/store/useStore'
import { SubmitButton } from '../../../../../../../../../../../shared/app/components/support/submit-button/submit-button'
import { signUp as submit } from '../functions/sign-up'

export const SignUpButton = () => {
  const { state } = useStore()
  const { app, texts, inputs } = state
  const { lang } = app
  const { signUpButtonLabel: label, termsOfServiceConsentLabel } = texts
  const { accountType, businessName, emailAddress, password, countryCode, phoneNumber, termsOfServiceConsent } = inputs

  const submitButtonProps = {
    label,
    lang,
    accountType,
    businessName,
    emailAddress,
    password,
    countryCode,
    phoneNumber,
    termsOfServiceConsent,
    termsOfServiceConsentLabel,
    submit,
  }

  return <SubmitButton {...submitButtonProps} />
}

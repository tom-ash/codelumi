import React from 'react'
import { SubmitButton } from '../../../../../../../../../../../shared/app/components/support/submit-button/submit-button'
import { signUp as submit } from '../functions/sign-up'
import { useTexts } from '../../../../../../../../../../../shared/app/functions/store/use-texts'
import { useInputs } from '../../../../../../../../../../../shared/app/functions/store/use-inputs'

export const SignUpButton = () => {
  const { signUpButtonLabel: label, termsOfServiceConsentLabel } = useTexts()
  const { accountType, businessName, emailAddress, password, countryCode, phoneNumber, termsOfServiceConsent } =
    useInputs()

  const submitButtonProps = {
    label,
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

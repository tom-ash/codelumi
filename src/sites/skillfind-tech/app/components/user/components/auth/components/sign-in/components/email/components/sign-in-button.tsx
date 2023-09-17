import React from 'react'
import { SubmitButton } from '../../../../../../../../../../../shared/app/components/support/submit-button/submit-button'
import { signIn as submit } from '../functions/sign-in'
import { useTexts } from '../../../../../../../../../../../shared/app/functions/store/use-texts'
import { useInputs } from '../../../../../../../../../../../shared/app/functions/store/use-inputs'

export const SignInButton = () => {
  const { signInButtonLabel: label } = useTexts()
  const { emailAddress, password } = useInputs()

  const submitButtonProps = {
    label,
    email: emailAddress,
    password,
    submit,
  }

  return <SubmitButton {...submitButtonProps} />
}

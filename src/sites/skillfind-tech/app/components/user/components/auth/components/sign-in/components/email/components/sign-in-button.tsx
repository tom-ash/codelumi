import React from 'react'
import { useStore } from '../../../../../../../../../../../shared/app/functions/store/useStore'
import { SubmitButton } from '../../../../../../../../../../../shared/app/components/support/submit-button/submit-button'
import { signIn as submit } from '../functions/sign-in'

export const SignInButton = () => {
  const { state } = useStore()
  const { texts, inputs } = state
  const { signInButtonLabel: label } = texts
  const { emailAddress, password } = inputs

  const submitButtonProps = {
    label,
    email: emailAddress,
    password,
    submit,
  }

  return <SubmitButton {...submitButtonProps} />
}


import React from 'react'
import { useStore } from '../../../../../../../../../../../shared/app/functions/store/useStore'
import { signIn as submit } from '../functions/sign-in'
import { SubmitButton } from '../../../../../../../../../../../shared/app/components/support/submit-button/submit-button'

export const SignInButton = () => {
  const { state } = useStore()
  const { app, texts, inputs } = state
  const { lang } = app
  const { signInButtonLabel: label } = texts
  const { emailAddress, password } = inputs

  const submitButtonProps = {
    label,
    lang,
    email: emailAddress,
    password,
    submit,
  }

  return <SubmitButton {...submitButtonProps} />
}

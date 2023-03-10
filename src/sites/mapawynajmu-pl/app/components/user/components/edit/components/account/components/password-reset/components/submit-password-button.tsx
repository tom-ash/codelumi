import React from 'react'
import { useStore } from '../../../../../../../../../../../shared/app/functions/store/useStore'
import { submitPassword } from '../functions/submit-password'
import { SubmitButton } from './submit-button'

export const SubmitPasswordButton = () => {
  const { state } = useStore()
  const { texts, inputs } = state
  const { submitPassword: label } = texts
  const { emailAddress: email, verificationCode, password } = inputs

  const submitButtonProps = {
    label,
    submit: submitPassword,
    email,
    verificationCode,
    password,
  }

  return <SubmitButton {...submitButtonProps} />
}

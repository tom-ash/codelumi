import React from 'react'
import { useStore } from '../../../../../../../../../../../shared/app/functions/store/useStore'
import { submitEmail } from '../functions/submit-email'
import { SubmitButton } from './submit-button'

export const SubmitEmailButton = () => {
  const { state } = useStore()
  const { texts, inputs } = state
  const { submitEmail: label } = texts
  const { emailAddress: email } = inputs

  const submitButtonProps = {
    label,
    submit: submitEmail,
    email,
  }

  return <SubmitButton {...submitButtonProps} />
}

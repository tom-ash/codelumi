import React from 'react'
import { useStore } from '../../../../../functions/store/useStore'
import { submitEmail } from '../functions/submit-email'
import { SubmitButton } from '../../../../support/submit-button/submit-button'

export const SubmitEmailButton = () => {
  const { state } = useStore()
  const { texts, data, inputs } = state
  const { submitEmail: label } = texts
  const { apiUrl } = data
  const { emailAddress: email } = inputs

  const submitButtonProps = {
    apiUrl,
    label,
    submit: submitEmail,
    email,
  }

  return <SubmitButton {...submitButtonProps} />
}

import React from 'react'
import { submitEmail } from '../functions/submit-email'
import { SubmitButton } from '../../../../support/submit-button/submit-button'
import { useTexts } from '../../../../../functions/store/use-texts'
import { useData } from '../../../../../functions/store/use-data'
import { useInputs } from '../../../../../functions/store/use-inputs'

export const SubmitEmailButton = () => {
  const { submitEmail: label } = useTexts()
  const { apiUrl } = useData()
  const { emailAddress: email } = useInputs()

  const submitButtonProps = {
    apiUrl,
    label,
    submit: submitEmail,
    email,
  }

  return <SubmitButton {...submitButtonProps} />
}

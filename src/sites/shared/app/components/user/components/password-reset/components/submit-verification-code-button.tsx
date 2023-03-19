import React from 'react'
import { useStore } from '../../../../../functions/store/useStore'
import { submitVerificationCode } from '../functions/submit-verification-code'
import { SubmitButton } from '../../../../support/submit-button/submit-button'

export const SubmitVerificationCodeButton = () => {
  const { state } = useStore()
  const { texts, data, inputs } = state
  const { submitVerificationCode: label } = texts
  const { apiUrl } = data
  const { verificationCode } = inputs

  const submitButtonProps = {
    apiUrl,
    label,
    submit: submitVerificationCode,
    verificationCode,
  }

  return <SubmitButton {...submitButtonProps} />
}

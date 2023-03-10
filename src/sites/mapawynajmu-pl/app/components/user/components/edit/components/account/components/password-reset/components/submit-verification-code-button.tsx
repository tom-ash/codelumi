import React from 'react'
import { useStore } from '../../../../../../../../../../../shared/app/functions/store/useStore'
import { submitVerificationCode } from '../functions/submit-verification-code'
import { SubmitButton } from './submit-button'

export const SubmitVerificationCodeButton = () => {
  const { state } = useStore()
  const { texts, inputs } = state
  const { submitVerificationCode: label } = texts
  const { verificationCode } = inputs

  const submitButtonProps = {
    label,
    submit: submitVerificationCode,
    verificationCode,
  }

  return <SubmitButton {...submitButtonProps} />
}

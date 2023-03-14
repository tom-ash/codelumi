import React from 'react'
import { useStore } from '../../../../../../../../functions/store/useStore'
import { SubmitButton } from '../../../../../../../support/submit-button/submit-button'
import { verify as submit } from '../../functions/verify'

export const VerifyButton = () => {
  const { state } = useStore()
  const { texts, inputs } = state
  const { verifyButtonLabel: label } = texts
  const { verificationCode } = inputs

  const submitButtonProps = {
    label,
    verificationCode,
    submit,
  }

  return <SubmitButton {...submitButtonProps} />
}

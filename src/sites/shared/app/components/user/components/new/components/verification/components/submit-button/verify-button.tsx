import React from 'react'
import { SubmitButton } from '../../../../../../../support/submit-button/submit-button'
import { verify as submit } from '../../functions/verify'
import { useTexts } from '../../../../../../../../functions/store/use-texts'
import { useInputs } from '../../../../../../../../functions/store/use-inputs'

export const VerifyButton = () => {
  const { verifyButtonLabel: label } = useTexts()
  const { verificationCode } = useInputs()

  const submitButtonProps = {
    label,
    verificationCode,
    submit,
  }

  return <SubmitButton {...submitButtonProps} />
}

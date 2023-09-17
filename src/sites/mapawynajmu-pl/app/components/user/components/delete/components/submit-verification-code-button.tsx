import React from 'react'
import { SubmitButton } from '../../../../../../../shared/app/components/support/submit-button/submit-button'
import { submitVerificationCode as submit } from '../functions/submit-verification-code'
import { useTexts } from '../../../../../../../shared/app/functions/store/use-texts'
import { useApp } from '../../../../../../../shared/app/functions/store/use-app'
import { useInputs } from '../../../../../../../shared/app/functions/store/use-inputs'
import { useDispatch } from 'react-redux'

export const SubmitVerificationCodeButton = () => {
  const { userDeleteSubmitButtonLabel: label } = useTexts()
  const { lang } = useApp()
  const { verificationCode } = useInputs()
  const dispatch = useDispatch()
  const setControl = (value: any) => dispatch({ type: 'control', value })
  const setErrors = (value: any) => dispatch({ type: 'errors', value })

  const submitButtonProps = {
    label,
    lang,
    verificationCode,
    submit,
    setErrors,
    setControl,
  }

  return <SubmitButton {...submitButtonProps} />
}

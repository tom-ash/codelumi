import React from 'react'
import { useStore } from '../../../../../../../shared/app/functions/store/useStore'
import { SubmitButton } from '../../../../../../../shared/app/components/support/submit-button/submit-button'
import { submitVerificationCode as submit } from '../functions/submit-verification-code'

export const SubmitVerificationCodeButton = () => {
  const { state, dispatch } = useStore()
  const { app, texts, inputs } = state
  const { userDeleteSubmitButtonLabel: label } = texts
  const { lang } = app
  const { verificationCode } = inputs
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

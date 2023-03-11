import React, { useContext } from 'react'
import { useStore } from '../../../../../../../shared/app/functions/store/useStore'
import { SubmitButton } from '../../../../../../../shared/app/components/support/submit-button/submit-button'
import { submitVerificationCode as submit } from '../functions/submit-verification-code'
import AppContext from '../../../../../constants/context'

export const SubmitVerificationCodeButton = () => {
  const { state, dispatch } = useStore()
  const { app, texts, inputs } = state
  const { userDeleteButtonLabel: label } = texts
  const {
    lang
  } = app
  const {
    verificationCode
  } = inputs
  const setControl = (value: any) => dispatch({ type: 'control', value })
  const setErrors = (value: any) => dispatch({ type: 'errors', value })
  const { changeRoute } = useContext(AppContext)

  const submitButtonProps = {
    label,
    lang,
    verificationCode,
    submit,
    setErrors,
    setControl,
    changeRoute,
  }

  return <SubmitButton {...submitButtonProps} />
}

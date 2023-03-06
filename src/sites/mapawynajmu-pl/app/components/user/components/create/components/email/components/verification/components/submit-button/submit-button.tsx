import React, { useContext } from 'react'
import { ManagedButton } from 'managed-inputs'
import { useStore } from '../../../../../../../../../../../../shared/app/functions/store/useStore'
import { ButtonSpinner } from '../../../../../../../../../support/components/button-spinner/button-spinner'
import AppContext from '../../../../../../../../../../constants/context'
import { verificationCodeValidator } from '../verification-code/verification-code.validator'
import { putVerificationCode } from '../../functions/put-verification-code'

export const SubmitButton = () => {
  const { changeRoute } = useContext(AppContext)
  const { state, dispatch } = useStore()
  const { app, texts, control, inputs } = state
  const { lang } = app
  const { verify } = texts
  const { connecting } = control
  const { verificationCode } = inputs
  const classNames = { container: 'button' }
  const buttonSpinnerProps = {
    connecting,
    label: verify
  }
  const label = <ButtonSpinner {...buttonSpinnerProps} />
  const setControl = (value: any) => dispatch({ type: 'control', value })
  const setErrors = (value: any) => dispatch({ type: 'errors', value })
  const onClick = () => {
    setControl({ connecting: true })

    if (!verificationCodeValidator({ verificationCode, setErrors })) return setControl({ connecting: false })

    putVerificationCode({
      lang,
      verificationCode,
      setControl,
      setErrors,
      changeRoute,
    })
  }

  const buttonProps = {
    disabled: connecting,
    classNames,
    label,
    onClick,
  }

  return <ManagedButton {...buttonProps} />
}

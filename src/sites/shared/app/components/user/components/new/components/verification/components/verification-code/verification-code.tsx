import React from 'react'
import { ManagedText } from 'managed-inputs'
import { useStore } from '../../../../../../../../functions/store/useStore'
import { verificationCodeValidator } from './verification-code.validator'

export const VerificationCodeInput = () => {
    const { state, dispatch } = useStore()
    const { texts, inputs, errors } = state
    const { verificationCode: value } = inputs
    const {
      verificationCodeInputLabel: label,
      verificationCodeInputInvalidError,
    } = texts
    const { verificationCode: verificationCodeInputInvalidErrorTriggered } = errors
    const match = /^\d{0,4}$/
    const classNames = { container: 'text-input' }
    const setInputs = (value: any) => dispatch({ type: 'inputs', value })
    const setErrors = (value: any) => dispatch({ type: 'errors', value })
    const onFocus = () => setErrors({ verificationCode: false })
    const onChange = (verificationCode: string) => setInputs({ verificationCode })
    const onBlur = (verificationCode: string) => verificationCodeValidator({ verificationCode, setErrors })
    const error = verificationCodeInputInvalidErrorTriggered && verificationCodeInputInvalidError
    const verificationCodeProps = {
      classNames,
      label,
      value,
      match,
      error,
      onFocus,
      onChange,
      onBlur,
    }

    return <ManagedText {...verificationCodeProps} />
  }
  
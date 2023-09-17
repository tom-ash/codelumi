import React from 'react'
import { ManagedText } from 'managed-inputs'
import { verificationCodeValidator } from './verification-code.validator'
import { useInputs } from '../../../../../../../../functions/store/use-inputs'
import { useTexts } from '../../../../../../../../functions/store/use-texts'
import { useErrors } from '../../../../../../../../functions/store/use-errors'
import { useDispatch } from 'react-redux'

export const VerificationCodeInput = () => {
  const { verificationCode: value } = useInputs()
  const { verificationCodeInputLabel: label, verificationCodeInputInvalidError } = useTexts()
  const { verificationCode: verificationCodeInputInvalidErrorTriggered } = useErrors()
  const dispatch = useDispatch()
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

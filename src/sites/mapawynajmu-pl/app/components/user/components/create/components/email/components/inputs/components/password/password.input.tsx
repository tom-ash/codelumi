import React from 'react'
import { useStore, useDispatch } from 'react-redux'
import { ManagedText } from 'managed-inputs'
import { passwordValidator } from './password.validator'

export const PasswordInput = () => {
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const setErrors = (value: any) => dispatch({ type: 'errors', value })
  const { texts, inputs, errors } = useStore().getState()
  const { password: value } = inputs
  const {
    passwordInputLabel: label,
    passwordInputPlaceholder: placeholder,
    passwordInvalidError,
  } = texts
  const { password: passwordInvalidErrorTriggered } = errors
  const classNames = { container: 'text-input' }
  const type = 'password'
  const autoComplete = 'new-password'
  const error = passwordInvalidErrorTriggered && passwordInvalidError
  const onFocus = () => setErrors({ password: false })
  const onBlur = (password: string) => passwordValidator({ password, setErrors })
  const onChange = (password: string) => setInputs({ password })

  const passwordInputProps = {
    classNames,
    type,
    autoComplete,
    label,
    value,
    placeholder,
    error,
    onFocus,
    onBlur,
    onChange,
  }

  return <ManagedText {...passwordInputProps} />
}

import React from 'react'
import { ManagedText } from 'managed-inputs'
import { useInputs } from '../../../../../../functions/store/use-inputs'
import { useTexts } from '../../../../../../functions/store/use-texts'
import { useErrors } from '../../../../../../functions/store/use-errors'
import { useDispatch } from 'react-redux'

export enum PasswordAutoComplete {
  NEW_PASSWORD = 'new-password',
  CURRENT_PASSWORD = 'current-password',
}

interface PasswordInput {
  (props: {
    autoComplete: PasswordAutoComplete
    validator: any // TODO!
  }): JSX.Element
}

export const PasswordInput: PasswordInput = props => {
  const { autoComplete, validator } = props
  const { password: value } = useInputs()
  const { passwordInputLabel: label, passwordInputPlaceholder: placeholder, passwordInputInvalidError } = useTexts()
  const { password: passwordInvalidErrorTriggered } = useErrors()
  const dispatch = useDispatch()
  const classNames = { container: 'text-input' }
  const type = 'password'
  const error = passwordInvalidErrorTriggered && passwordInputInvalidError
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const setErrors = (value: any) => dispatch({ type: 'errors', value })
  const onFocus = () => setErrors({ password: false, credentials: false })
  const onBlur = (password: string) => validator({ password, setErrors })
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

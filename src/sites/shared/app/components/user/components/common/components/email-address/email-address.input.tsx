import React from 'react'
import { ManagedText } from 'managed-inputs'
import { emailAddressValidator } from './email-address.validator'
import { useStore } from '../../../../../../functions/store/useStore'

export const EmailAddressInput = () => {
  const { state, dispatch } = useStore()
  const { texts, inputs, errors } = state
  const { emailAddress } = inputs
  const {
    emailInputLabel: label,
    emailInputPlaceholder: placeholder,
    emailInputInvalidError,
  } = texts
  const { emailAddress: emailInvalidErrorTriggered } = errors
  const classNames = { container: 'text-input' }
  const type = 'email'
  const autoComplete = 'email'
  const value = emailAddress
  const error = emailInvalidErrorTriggered && emailInputInvalidError
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const setErrors = (value: any) => dispatch({ type: 'errors', value })
  const onFocus = () => setErrors({ emailAddress: false, credentials: false })
  const onBlur = (emailAddress: string) => emailAddressValidator({ emailAddress, setErrors })
  const onChange = (emailAddress: string) => setInputs({ emailAddress })

  const emailAddressInputProps = {
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

  return <ManagedText {...emailAddressInputProps} />
}

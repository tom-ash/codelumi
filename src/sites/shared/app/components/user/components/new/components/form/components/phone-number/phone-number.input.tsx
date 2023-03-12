import React from 'react'
import { ManagedText } from 'managed-inputs'
import { phoneNumberValidator } from './phone-number.validator'
import { useStore } from '../../../../../../../../functions/store/useStore'

export const PhoneNumberInput = () => {
  const { state, dispatch } = useStore()
  const { texts, inputs, errors } = state
  const { phoneNumber } = inputs
  const {
    phoneNumberInputLabel: label,
    phoneNumberInputPlaceholder: placeholder,
    phoneNumberInputInvalidError,
  } = texts
  const { phoneNumber: phoneNumberInvalidErrorTriggered } = errors
  const classNames = { container: 'text-input phone-number' }
  const match = /^(\d){0,9}$/
  const type = 'tel'
  const autoComplete = 'tel-local'
  const value = phoneNumber
  const error = phoneNumberInvalidErrorTriggered && phoneNumberInputInvalidError
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const setErrors = (value: any) => dispatch({ type: 'errors', value })
  const onFocus = () => setErrors({ phoneNumber: false })
  const onBlur = (phoneNumber: string) => phoneNumberValidator({ phoneNumber, setErrors })
  const onChange = (phoneNumber: string) => setInputs({ phoneNumber })

  const emailAddressInputProps = {
    classNames,
    type,
    autoComplete,
    label,
    placeholder,
    value,
    match,
    error,
    onFocus,
    onBlur,
    onChange,
  }

  return <ManagedText {...emailAddressInputProps} />
}

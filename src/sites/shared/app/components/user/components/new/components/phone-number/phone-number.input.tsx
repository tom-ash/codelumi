import React from 'react'
import { useStore, useDispatch } from 'react-redux'
import { ManagedText } from 'managed-inputs'
import { phoneNumberValidator } from './phone-number.validator'
import { EMPTY_LANG_OBJECT } from '../../../../../../../../mapawynajmu-pl/app/constants/lang-objects/empty'

export const PhoneNumberInput = () => {
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const setErrors = (value: any) => dispatch({ type: 'errors', value })
  const { texts, inputs, errors } = useStore().getState()
  const { phoneNumber } = inputs
  const {
    phoneNumberInputLabel: label,
    phoneNumberInputPlaceholder: placeholder,
    phoneNumberInvalidError,
  } = texts
  const { phoneNumber: phoneNumberInvalidErrorTriggered } = errors
  const classNames = { container: 'text-input phone-number' }
  const match = /^(\d){0,9}$/
  const type = 'tel'
  const autoComplete = 'tel-local'
  const value = phoneNumber
  const error = phoneNumberInvalidErrorTriggered && phoneNumberInvalidError
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

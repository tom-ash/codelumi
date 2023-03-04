import React from 'react'
import { useStore, useDispatch } from 'react-redux'
import { ManagedText } from 'managed-inputs'
import { businessNameValidator } from './business-name.validator'

export const BusinessNameInput = () => {
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const setErrors = (value: any) => dispatch({ type: 'errors', value })
  const { texts, inputs, errors } = useStore().getState()
  const {
    businessNameInputLabel: label,
    businessNameInputPlaceholder: placeholder,
    businessNameInvalidError,
  } = texts
  const { businessName } = inputs
  const { businessName: businessNameInvalidErrorTriggered } = errors
  const classNames = { container: 'text-input' }
  const value = businessName
  const error = businessNameInvalidErrorTriggered && businessNameInvalidError
  const onChange = (businessName: string) => setInputs({ businessName })
  const onFocus = () => dispatch({ type: 'errors', value: { businessName: false } })
  const onBlur = (businessName: string) => businessNameValidator({ businessName, setErrors })

  const inputProps = {
    classNames,
    label,
    value,
    placeholder,
    error,
    onFocus,
    onBlur,
    onChange,
  }

  return <ManagedText {...inputProps} />
}

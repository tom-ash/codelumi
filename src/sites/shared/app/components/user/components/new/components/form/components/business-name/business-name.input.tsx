import React from 'react'
import { ManagedText } from 'managed-inputs'
import { businessNameValidator } from './business-name.validator'
import { useStore } from '../../../../../../../../functions/store/useStore'

export const BusinessNameInput = () => {
  const { state, dispatch } = useStore()
  const { texts, inputs, errors } = state
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
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const setErrors = (value: any) => dispatch({ type: 'errors', value })
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

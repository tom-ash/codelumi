import React from 'react'
import { ManagedText } from 'managed-inputs'
import { businessNameValidator } from './business-name.validator'
import { useTexts } from '../../../../../../../../functions/store/use-texts'
import { useInputs } from '../../../../../../../../functions/store/use-inputs'
import { useErrors } from '../../../../../../../../functions/store/use-errors'
import { useDispatch } from 'react-redux'

export const BusinessNameInput = () => {
  const {
    businessNameInputLabel: label,
    businessNameInputPlaceholder: placeholder,
    businessNameInputInvalidError,
  } = useTexts()
  const { businessName } = useInputs()
  const { businessName: businessNameInvalidErrorTriggered } = useErrors()
  const dispatch = useDispatch()
  const classNames = { container: 'text-input' }
  const value = businessName
  const error = businessNameInvalidErrorTriggered && businessNameInputInvalidError
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

import React from 'react'
import { ManagedText } from 'managed-inputs'
import { emailAddressValidator } from './email-address.validator'
import { useInputs } from '../../../../../../functions/store/use-inputs'
import { useTexts } from '../../../../../../functions/store/use-texts'
import { useErrors } from '../../../../../../functions/store/use-errors'
import { useDispatch } from 'react-redux'

export const EmailAddressInput = () => {
  const { emailAddress } = useInputs()
  const { emailInputLabel: label, emailInputPlaceholder: placeholder, emailInputInvalidError } = useTexts()
  const { emailAddress: emailInvalidErrorTriggered } = useErrors()
  const dispatch = useDispatch()
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

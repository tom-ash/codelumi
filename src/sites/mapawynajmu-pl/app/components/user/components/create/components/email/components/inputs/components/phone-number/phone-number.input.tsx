import React from 'react'
import { type Dispatch } from 'redux'
import { ManagedText } from 'managed-inputs'
import { phoneNumberValidator } from './phone-number.validator'
import { EMPTY_LANG_OBJECT } from '../../../../../../../../../../constants/lang-objects/empty'

interface PhoneNumberInputProps {
  phoneNumber: string
  phoneNumberError: LangObject
  langHandler: LangHandler
  dispatch: Dispatch
}

export const PhoneNumberInput = (props: PhoneNumberInputProps) => {
  const { phoneNumber, phoneNumberError, langHandler, dispatch } = props
  const classNames = { container: 'text-input phone-number' }
  // @ts-ignore
  const label = langHandler({ pl: 'Numer telefonu', en: 'Phone number' })
  const match = /^(\d){0,9}$/
  const type = 'tel'
  const autoComplete = 'tel-local'
  const value = phoneNumber
  // @ts-ignore
  const placeholder = langHandler({ pl: 'Podaj numer telefonu', en: 'Provide phone number' })
  // @ts-ignore
  const error = langHandler(phoneNumberError)
  const onFocus = () =>
    dispatch({
      type: 'errors',
      value: { phoneNumber: EMPTY_LANG_OBJECT },
    })
  const onBlur = (phoneNumber: string) => {
    phoneNumberValidator({ phoneNumber, dispatch })
  }
  const onChange = (phoneNumber: string) => {
    dispatch({
      type: 'inputs',
      value: { phoneNumber },
    })
  }

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

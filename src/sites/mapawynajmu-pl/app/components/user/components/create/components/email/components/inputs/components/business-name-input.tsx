import React from 'react'
import { ManagedText } from 'managed-inputs'

interface BusinessNameInputProps {
  businessName: string
  businessNameError: LangObject
  changeInputs: ChangeInputs
  langHandler: LangHandler
}

export const BusinessNameInput = (props: BusinessNameInputProps) => {
  const { businessName, businessNameError, changeInputs, langHandler } = props

  const classNames = { container: 'text-input' }
  const label = 'Nazwa firmy'
  const value = businessName
  const placeholder = 'Podaj nazwę firmy'
  const onChange = (changedBusinessName: string) => changeInputs({ businessName: changedBusinessName })
  // @ts-ignore
  const error = langHandler(businessNameError)

  // onFocus: () => errorResetter.call(this, 'phone'),
  // onBlur: value => {
  //   this.phoneNumberManager().validate(value)
  //   sendGaEvent(PHONE_NUMBER_INPUTTED_EVENT)
  // },
  // validate: value => phoneValidator.call(this, value),

  const inputProps = {
    classNames,
    label,
    value,
    placeholder,
    error,
    onChange,
  }

  return <ManagedText {...inputProps} />
}

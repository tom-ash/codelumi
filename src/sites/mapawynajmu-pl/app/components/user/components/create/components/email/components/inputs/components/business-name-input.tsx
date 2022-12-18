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
  // @ts-ignore
  const label = langHandler({ pl: 'Nazwa firmy', en: 'Business Name' })
  const value = businessName
  // @ts-ignore
  const placeholder = langHandler({ pl: 'Podaj nazwę firmy', en: 'Provide business name' })
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

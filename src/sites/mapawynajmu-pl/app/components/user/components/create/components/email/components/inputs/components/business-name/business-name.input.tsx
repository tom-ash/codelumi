import React from 'react'
import { Dispatch } from 'redux'
import { ManagedText } from 'managed-inputs'
import { businessNameValidator } from './business-name.validator'
import { EMPTY_LANG_OBJECT } from '../../../../../../../../../../constants/lang-objects/empty'

interface BusinessNameInputProps {
  businessName: string
  businessNameError: LangObject
  langHandler: LangHandler
  setInputs: ChangeInputs
  dispatch: Dispatch
}

export const BusinessNameInput = (props: BusinessNameInputProps) => {
  const { businessName, businessNameError, setInputs, langHandler, dispatch } = props
  const classNames = { container: 'text-input' }
  // @ts-ignore
  const label = langHandler({ pl: 'Nazwa firmy', en: 'Business Name' })
  const value = businessName || ''
  // @ts-ignore
  const placeholder = langHandler({ pl: 'Podaj nazwę firmy', en: 'Provide business name' })
  const onChange = (changedBusinessName: string) => setInputs({ businessName: changedBusinessName })
  // @ts-ignore
  const error = langHandler(businessNameError)

  const onFocus = () =>
    dispatch({
      type: 'errors',
      value: { businessName: EMPTY_LANG_OBJECT },
    })
  const onBlur = (value: string) => {
    businessNameValidator({ value, dispatch })
  }

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

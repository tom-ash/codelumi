import React from 'react'
import { type Dispatch } from 'redux'
import { ManagedText } from 'managed-inputs'
import { emailAddressValidator } from './email-address.validator'
import { EMPTY_LANG_OBJECT } from '../../../../../../../../../../constants/lang-objects/empty'

interface EmailAddressInputProps {
  emailAddress: string
  emailAddressError: LangObject
  langHandler: LangHandler
  setInputs: ChangeInputs
  dispatch: Dispatch
}

export const EmailAddressInput = (props: EmailAddressInputProps) => {
  const { emailAddress, emailAddressError, setInputs, langHandler, dispatch } = props
  const classNames = { container: 'text-input' }
  // @ts-ignore
  const label = langHandler({ pl: 'Adres email', en: 'Email Address' })
  const type = 'email'
  const autoComplete = 'email'
  const value = emailAddress
  // @ts-ignore
  const placeholder = langHandler({ pl: 'Podaj adres email', en: 'Provide email address' })
  // @ts-ignore
  const error = langHandler(emailAddressError)
  const onFocus = () =>
    dispatch({
      type: 'errors',
      value: { emailAddress: EMPTY_LANG_OBJECT },
    })
  const onBlur = (emailAddress: string) => {
    emailAddressValidator({ emailAddress, dispatch })
  }
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

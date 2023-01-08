import React from 'react'
import { type Dispatch } from 'redux'
import { ManagedText } from 'managed-inputs'
import { passwordValidator } from './password.validator'
import { EMPTY_LANG_OBJECT } from '../../../../../../../../../../constants/lang-objects/empty'

interface PasswordInputProps {
  password: string
  passwordError: LangObject
  langHandler: LangHandler
  changeInputs: ChangeInputs
  dispatch: Dispatch
}

export const PasswordInput = (props: PasswordInputProps) => {
  const { password, passwordError, changeInputs, langHandler, dispatch } = props
  const classNames = { container: 'text-input' }
  // @ts-ignore
  const label = langHandler({ pl: 'Hasło', en: 'Password' })
  const type = 'password'
  const autoComplete = 'new-password'
  const value = password
  // @ts-ignore
  const placeholder = langHandler({ pl: 'Podaj hasło', en: 'Provide password' })
  // @ts-ignore
  const error = langHandler(passwordError)
  const onFocus = () => dispatch({
    type: 'user/create/errors',
    value: { password: EMPTY_LANG_OBJECT }
  })
  const onBlur = (password: string) => {
    passwordValidator({ password, dispatch })
  }
  const onChange = (password: string) => changeInputs({ password })

  const passwordInputProps = {
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

  return <ManagedText {...passwordInputProps} />
}

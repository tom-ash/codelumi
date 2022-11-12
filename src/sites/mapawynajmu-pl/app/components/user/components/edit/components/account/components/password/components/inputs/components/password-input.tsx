import React, { useContext } from 'react'
import AppContext from '../../../../../../../../../../../constants/context'
import { ManagedText } from 'managed-inputs'
import { EMPTY_LANG_OBJECT } from '../../../../../../../../../../../constants/lang-objects/empty'
import { ValidatePassword } from '../../../../../../../../../common/validators/validate-password'

const LABEL_LANG_OBJECT = { pl: 'Nowe hasło', en: 'New password' }

interface PasswordInputProps {
  password: string
  passwordError: LangObject
  setPassword(newValue: string): void
  validatePassword: ValidatePassword
  setPasswordError(props: LangObject): void
}

export const PasswordInput = (props: PasswordInputProps) => {
  const { langHandler } = useContext(AppContext)
  const { password, passwordError, setPassword, validatePassword, setPasswordError } = props

  const inputProps = {
    classNames: { container: 'text-input' },
    type: 'password',
    autoComplete: 'new-password',
    label: langHandler(LABEL_LANG_OBJECT),
    value: password,
    error: langHandler(passwordError),
    onChange: (newValue: string) => {
      setPassword(newValue)
      setPasswordError(EMPTY_LANG_OBJECT)
    },
    onBlur: () => validatePassword({ password, setPasswordError }),
  }

  return <ManagedText {...inputProps} />
}

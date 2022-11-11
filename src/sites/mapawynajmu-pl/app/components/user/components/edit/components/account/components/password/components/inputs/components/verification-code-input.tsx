import React, { useContext } from 'react'
import AppContext from '../../../../../../../../../../../constants/context'
import { ManagedText } from 'managed-inputs'
import { EMPTY_LANG_OBJECT } from '../../../../../../../../../../../constants/lang-objects/empty'

const LABEL_LANG_OBJECT = { pl: 'Kod weryfikacyjny', en: 'Verification Code' }

interface VerificationCodeInputProps {
  value: string
  error: LangObject
  changeValue(newValue: string): void
  validateValue(value: string): void
  changeError(props: typeof EMPTY_LANG_OBJECT): void
}

export const VerificationCodeInput = (props: VerificationCodeInputProps) => {
  const { langHandler } = useContext(AppContext)
  const { value, error, changeValue, validateValue, changeError } = props

  const inputProps = {
    classNames: { container: 'text-input' },
    label: langHandler(LABEL_LANG_OBJECT),
    value,
    match: /^\d{0,4}$/,
    error: langHandler(error),
    onChange: (newValue: string) => {
      changeValue(newValue)
      changeError(EMPTY_LANG_OBJECT)
    },
    onBlur: validateValue,
  }

  return <ManagedText {...inputProps} />
}

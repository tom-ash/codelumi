import React, { useContext, useCallback, useState } from 'react'
import AppContext from '../../../../../../../../../../../constants/context'
import { ManagedText } from 'managed-inputs'

const LABEL = { pl: 'Kod weryfikacyjny', en: 'Verification Code' }
const ERROR_LANG_OBJECT = { pl: 'Nieprawidłowy kod weryfikacyjny.', en: 'Invalid verification code.' }
const EMPTY_LANG_OBJECT = { pl: '', en: '' }

interface VerificationCodeProps {
  value: string
  changeValue(newValue: string): void
}

export const VerificationCode = (props: VerificationCodeProps) => {
  const { langHandler } = useContext(AppContext)
  const {
    value,
    changeValue,
  } = props

  const [error, changeError] = useState({ pl: '', en: '' })

  const validate = useCallback(() => {
    if (value.length === 4) return changeError(EMPTY_LANG_OBJECT)

    changeError(ERROR_LANG_OBJECT)
  }, [value])

  const inputProps = {
    classNames: { container: 'text-input' },
    label: langHandler(LABEL),
    value,
    onChange: (newValue: string) => changeValue(newValue),
    onBlur: validate,
    validate,
    error: langHandler(error),
  }

  return <ManagedText {...inputProps} />
}

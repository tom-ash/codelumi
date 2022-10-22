import React from 'react'
import { ManagedText } from 'managed-inputs'

interface NameInputProps {
  recordKey: string
  changeKey(key: string): void
}

export function NameInput(props: NameInputProps) {
  const { recordKey, changeKey } = props
  const classNames = { container: 'form-input text' }
  const value = recordKey
  const label = 'Key'
  const onChange = (key: string) => changeKey(key)
  const nameInputProps = { value, classNames, label, onChange }

  return <ManagedText {...nameInputProps} />
}

export default NameInput

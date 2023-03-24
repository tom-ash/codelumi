import React from 'react'
import { ManagedText } from 'managed-inputs'

type NameInputProps = {
  name: string
  setInputs(attrs: { name: string }): void
}

export function NameInput(props: NameInputProps) {
  const { name, setInputs } = props

  const classNames = { container: 'form-input text with-icon rent-amount' }
  const label = 'Nazwa'

  const nameProps = {
    label,
    value: name || '',
    onChange: (value: string) => setInputs({ name: value }),
    classNames,
  }

  return <ManagedText {...nameProps} />
}

export default NameInput

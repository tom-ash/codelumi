import React from 'react'
import { ManagedText } from 'managed-inputs'

type NameInputProps = {
  name: string
  changeInputs(attrs: { name: string }): void
  langHandler: LangHandler
}

export function NameInput(props: NameInputProps) {
  const { name, changeInputs } = props

  const classNames = { container: 'form-input text with-icon rent-amount' }
  const label = 'Nazwa'

  const nameProps = {
    label,
    value: name || '',
    onChange: (value: string) => changeInputs({ name: value }),
    classNames,
  }

  return <ManagedText {...nameProps} />
}

export default NameInput

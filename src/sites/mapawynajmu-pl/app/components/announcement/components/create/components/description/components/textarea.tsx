import React from 'react'
import { ManagedTextarea } from 'managed-inputs'

interface TextareaProps {
  value: string
  valueKey: 'polishDescription' | 'englishDescription'
  setInputs: ChangeInputs
}

export const Textarea = (props: TextareaProps) => {
  const { value, valueKey, setInputs } = props
  const classNames = { container: 'form-input textarea' }

  const textareaProps = {
    value,
    classNames,
    counterLimit: 3000,
    onChange: (value: string) => setInputs({ [valueKey]: value }),
  }

  return <ManagedTextarea {...textareaProps} />
}

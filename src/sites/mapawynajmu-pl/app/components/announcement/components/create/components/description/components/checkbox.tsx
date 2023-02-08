import React from 'react'
import { ManagedCheckbox } from 'managed-inputs'

interface TextareaProps {
  checked: boolean
  checkedKey: 'showPolishDescription' | 'showEnglishDescription'
  label: string
  setInputs: ChangeInputs
}

export const Checkbox = (props: TextareaProps) => {
  const { checked, checkedKey, label, setInputs } = props
  const classNames = { container: 'form-input checkbox' }

  const textareaProps = {
    classNames,
    label,
    checked,
    onClick: () => setInputs({ [checkedKey]: !checked }),
  }

  return <ManagedCheckbox {...textareaProps} />
}

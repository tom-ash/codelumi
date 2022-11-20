import React from 'react'
import { ManagedCheckbox } from 'managed-inputs'

interface TextareaProps {
  checked: boolean
  checkedKey: 'showPolish' | 'showEnglish'
  label: string
  changeInputs: ChangeInputs
}

export const Checkbox = (props: TextareaProps) => {
  const {
    checked,
    checkedKey,
    label,
    changeInputs
  } = props
  const classNames = { container: 'form-input checkbox add-switcher' }

  const textareaProps = {
    classNames,
    label,
    checked,
    onClick: () => changeInputs({ [checkedKey]: !checked }),
  }

  return <ManagedCheckbox {...textareaProps} />
}
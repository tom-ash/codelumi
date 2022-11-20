import React from 'react'
import { ManagedTextarea } from 'managed-inputs'

interface TextareaProps {
  value: string
  valueKey: 'polish' | 'english'
  changeInputs: ChangeInputs
}

export const Textarea = (props: TextareaProps) => {
  const {
    value,
    valueKey,
    changeInputs
  } = props
  const classNames = { container: 'form-input textarea' }

  // console.log(key)/|\\\\\\\\\\\\\\

  const textareaProps = {
    value,
    classNames,
    counterLimit: 3000,
    onChange: (value: string) => changeInputs({ [valueKey]: value }),
  }

  return <ManagedTextarea {...textareaProps} />
}
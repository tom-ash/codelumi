import React from 'react'
import { ManagedText } from 'managed-inputs'

interface GenericAttributeInputProps {
  label: string
  value: string
  error: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export const GenericAttributeInput = (props: GenericAttributeInputProps) => {
  const { label, value, error, setValue } = props

  const inputProps = {
    classNames: { container: 'text-input' },
    label,
    value,
    error,
    onChange: (changedValue: string) => {
      setValue(changedValue)
    },
    onEnter: () => {
      console.log('TODO')
    },
    // onBlur: () => validatePassword({ password, setPasswordError }),
  }

  return <ManagedText {...inputProps} />
}

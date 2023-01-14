import React, { useContext } from 'react'
import { ManagedText } from 'managed-inputs'

interface GenericAttributeInputProps {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  label: string
  error: string
}

export const GenericAttributeInput = (props: GenericAttributeInputProps) => {
  const { value, setValue, label, error } = props

  const inputProps = {
    classNames: { container: 'text-input' },
    label,
    value,
    error,
    onChange: (changedValue: string) => {
      setValue(changedValue)
      // setPasswordError(EMPTY_LANG_OBJECT)
    },
    // onBlur: () => validatePassword({ password, setPasswordError }),
  }

  return <ManagedText {...inputProps} />
}

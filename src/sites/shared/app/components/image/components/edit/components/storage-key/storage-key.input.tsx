import React from 'react'
import { TextInput } from '../../../../../support/text-input/text-input'

export const StorageKeyInput = () => {
  const textInputProps = {
    inputKey: 'storageKey',
    containerClassNames: 'form-input storage-key',
  }

  return <TextInput {...textInputProps} />
}

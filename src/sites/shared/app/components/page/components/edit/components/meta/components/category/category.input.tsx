import React from 'react'
import { TextInput } from '../../../../../../../support/text-input/text-input'

export const CategoryInput = () => {
  const textInputProps = {
    inputKey: 'category',
    containerClassNames: 'form-input text',
  }

  return <TextInput {...textInputProps} />
}

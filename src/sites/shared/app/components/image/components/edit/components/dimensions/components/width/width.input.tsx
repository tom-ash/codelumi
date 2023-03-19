import React from 'react'
import { TextInput } from '../../../../../../../support/text-input/text-input'

export const WidthInput = () => {
  const textInputProps = {
    inputKey: 'width',
    containerClassNames: 'form-input text',
  }

  return <TextInput {...textInputProps} />
}

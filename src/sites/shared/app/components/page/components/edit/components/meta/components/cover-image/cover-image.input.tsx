import React from 'react'
import { TextInput } from '../../../../../../../support/text-input/text-input'

export const CoverImageInput = () => {
  const textInputProps = {
    inputKey: 'coverImage',
    containerClassNames: 'form-input text',
  }

  return <TextInput {...textInputProps} />
}

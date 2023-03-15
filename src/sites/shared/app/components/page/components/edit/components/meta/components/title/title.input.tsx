import React from 'react'
import { TextInput } from '../../../../../../../support/text-input/text-input'

export const TitleInput = () => {
  const textInputProps = {
    inputKey: 'title',
    containerClassNames: 'form-input text',
  }

  return <TextInput {...textInputProps} />
}

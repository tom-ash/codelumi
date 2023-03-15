import React from 'react'
import { TextInput } from '../../../../../../../support/text-input/text-input'

export const LangAltsGroupInput = () => {
  const textInputProps = {
    inputKey: 'langAltsGroup',
    containerClassNames: 'form-input text',
  }

  return <TextInput {...textInputProps} />
}

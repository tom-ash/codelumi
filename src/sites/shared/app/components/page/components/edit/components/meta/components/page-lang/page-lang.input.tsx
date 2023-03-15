import React from 'react'
import { TextInput } from '../../../../../../../support/text-input/text-input'

export const PageLangInput = () => {
  const textInputProps = {
    inputKey: 'pageLang',
    containerClassNames: 'form-input text',
  }

  return <TextInput {...textInputProps} />
}

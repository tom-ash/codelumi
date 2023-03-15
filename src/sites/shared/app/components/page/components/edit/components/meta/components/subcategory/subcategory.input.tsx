import React from 'react'
import { TextInput } from '../../../../../../../support/text-input/text-input'

export const SubcategoryInput = () => {
  const textInputProps = {
    inputKey: 'subcategory',
    containerClassNames: 'form-input text',
  }

  return <TextInput {...textInputProps} />
}

import React from 'react'
import { TextInput } from '../../../../../../../support/text-input/text-input'

export const CanonicalUrlInput = () => {
  const textInputProps = {
    inputKey: 'canonicalUrl',
    containerClassNames: 'form-input text',
  }

  return <TextInput {...textInputProps} />
}

import React from 'react'
import { validateEmail } from './validators/validate-email'
import { TextInput } from '../../text-input-semanticize/text-input'

export const Email = () => {
  return (
    <TextInput
      inputKey='email'
      required={true}
      validate={validateEmail}
    />
  )
}

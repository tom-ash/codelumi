import React from 'react'
import { TextInput } from '../../text-input-semanticize/text-input'
import { validatePassword } from './validators/validate-password'
import { TextInputType } from 'semanticize'

// TODO: Add autocomplete.
// autoComplete: PasswordAutoComplete.NEW_PASSWORD,

export const Password = () => {
  return (
    <TextInput
      inputKey='password'
      required={true}
      validate={validatePassword}
      type={TextInputType.PASSWORD}
    />
  )
}

import React from 'react'
import { TextInput } from '../../../../../../../../../../shared/app/components/support/text-input/text-input'
import { TextInputType } from '../../../../../../../../../../shared/app/components/support/text-input/text-input'

export const NameInput = () => {
  const textInputProps = {
    inputKey: 'name'
  }

  return <TextInput {...textInputProps} />
}

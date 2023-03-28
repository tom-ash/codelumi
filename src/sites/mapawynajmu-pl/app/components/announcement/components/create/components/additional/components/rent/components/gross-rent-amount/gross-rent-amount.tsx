import React from 'react'
import { TextInput } from '../../../../../../../../../../../../shared/app/components/support/text-input/text-input'
import { TextInputType } from '../../../../../../../../../../../../shared/app/components/support/text-input/text-input'

export const GrossRentAmountInput = () => {
  const textInputProps = {
    inputKey: 'grossRentAmount',
    type: TextInputType.NUMBER,
    containerClassNames: 'rent-amount',
  }

  return <TextInput {...textInputProps} />
}

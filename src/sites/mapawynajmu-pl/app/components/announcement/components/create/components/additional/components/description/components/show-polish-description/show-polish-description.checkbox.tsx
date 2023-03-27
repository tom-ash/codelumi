import React from 'react'
import { Checkbox } from '../../../../../../../../../../../../shared/app/components/support/checkbox/checkbox'

export const ShowPolishDescription = () => {
  const textInputProps = {
    checkboxKey: 'showPolishDescription',
    containerClassNames: 'form-input',
  }

  return <Checkbox {...textInputProps} />
}

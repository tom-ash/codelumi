import React from 'react'
import { Checkbox } from '../../../../../../../../../../../../shared/app/components/support/checkbox/checkbox'

export const ShowEnglishDescription = () => {
  const textInputProps = {
    checkboxKey: 'showEnglishDescription',
    containerClassNames: 'form-input',
  }

  return <Checkbox {...textInputProps} />
}

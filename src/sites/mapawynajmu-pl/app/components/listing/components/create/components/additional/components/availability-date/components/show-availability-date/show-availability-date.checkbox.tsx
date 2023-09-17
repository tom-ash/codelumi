import React from 'react'
import { Checkbox } from '../../../../../../../../../../../../shared/app/components/support/checkbox/checkbox'

export const ShowAvailabilityDate = () => {
  const textInputProps = {
    checkboxKey: 'showAvailabilityDate',
    containerClassNames: 'form-input',
  }

  return <Checkbox {...textInputProps} />
}

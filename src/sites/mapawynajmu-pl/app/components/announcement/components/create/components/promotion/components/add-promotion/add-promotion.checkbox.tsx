import React from 'react'
import { Checkbox } from '../../../../../../../../../../shared/app/components/support/checkbox/checkbox'

export const AddPromotionCheckbox = () => {
  const checkboxInputProps = {
    checkboxKey: 'addPromotion',
    containerClassNames: 'form-input',
  }

  return <Checkbox {...checkboxInputProps} />
}

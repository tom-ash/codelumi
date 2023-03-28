import React from 'react'
import { Select } from '../../../../../../../../../../../../shared/app/components/support/select/select'

export const RentCurrencySelect = () => {
  const selectProps = {
    selectKey: 'rentCurrency',
    containerClassNames: 'rent-currency',
  }

  return <Select {...selectProps} />
}

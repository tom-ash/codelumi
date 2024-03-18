import React from 'react'
import { OldSelect } from '../../../../../../../../../../../../shared/app/components/support/old-select/old-select'

export const RentCurrencySelect = () => {
  const selectProps = {
    selectKey: 'rentCurrency',
    containerClassNames: 'rent-currency',
  }

  return <OldSelect {...selectProps} />
}

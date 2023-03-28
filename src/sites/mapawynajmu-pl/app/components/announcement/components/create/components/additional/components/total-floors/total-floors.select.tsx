import React from 'react'
import { Select } from '../../../../../../../../../../shared/app/components/support/select/select'

export const TotalFloorsSelect = () => {
  const selectProps = {
    selectKey: 'totalFloors',
  }

  return <Select {...selectProps} />
}

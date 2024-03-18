import React from 'react'
import { OldSelect } from '../../../../../../../../../../shared/app/components/support/old-select/old-select'

export const TotalFloorsSelect = () => {
  const selectProps = {
    selectKey: 'totalFloors',
  }

  return <OldSelect {...selectProps} />
}

import React from 'react'
import { OldSelect } from '../../../../../../../../../../shared/app/components/support/old-select/old-select'

export const FloorSelect = () => {
  const selectProps = {
    selectKey: 'floor',
  }

  return <OldSelect {...selectProps} />
}

import React from 'react'
import { Select } from '../../../../../../../../../../shared/app/components/support/select/select'

export const FloorSelect = () => {
  const selectProps = {
    selectKey: 'floor',
  }

  return <Select {...selectProps} />
}

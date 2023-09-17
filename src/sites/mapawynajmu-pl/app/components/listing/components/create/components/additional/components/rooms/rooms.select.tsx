import React from 'react'
import { Select } from '../../../../../../../../../../shared/app/components/support/select/select'

export const RoomsSelect = () => {
  const selectProps = {
    selectKey: 'rooms',
  }

  return <Select {...selectProps} />
}

import React from 'react'
import { OldSelect } from '../../../../../../../../../../shared/app/components/support/old-select/old-select'

export const RoomsSelect = () => {
  const selectProps = {
    selectKey: 'rooms',
  }

  return <OldSelect {...selectProps} />
}

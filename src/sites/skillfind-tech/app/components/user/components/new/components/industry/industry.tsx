import React from 'react'
import { Select } from '../../../../../../../../shared/app/components/support/select/select'

export const Industry = () => {
  return (
    <div className='industry'>
      <Select
        selectKey='industry'
        className='select typed-text-input industry'
      />
    </div>
  )
}

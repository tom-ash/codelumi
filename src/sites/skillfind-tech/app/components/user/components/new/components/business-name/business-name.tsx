import React from 'react'
import { TypedTextInput } from '../../../../../../../../shared/app/components/support/typed-text-input/typed-text-input'

export const BusinessName = () => {
  return (
    <div className='business-name'>
      <TypedTextInput inputKey='businessName' />
    </div>
  )
}

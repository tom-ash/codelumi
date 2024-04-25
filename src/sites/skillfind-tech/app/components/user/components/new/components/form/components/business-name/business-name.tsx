import React from 'react'
import { TextInput } from '../../../../../../../../../../shared/app/components/support/text-input-semanticize/text-input'
import { validateBusinessName } from './functions/validate-business-name'

export const BusinessName = () => {
  return (
    <div className='business-name'>
      <TextInput
        inputKey='businessName'
        validate={validateBusinessName}
      />
    </div>
  )
}

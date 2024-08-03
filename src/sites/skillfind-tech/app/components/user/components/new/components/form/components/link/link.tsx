import React from 'react'
import { TextInput } from '../../../../../../../../../../shared/app/components/support/text-input-semanticize/text-input'
import { validateLink } from './functions/validate-application-link'

export const Link = () => {
  return (
    <div className='link'>
      <TextInput
        inputKey='link'
        optional={true}
        validate={validateLink}
      />
    </div>
  )
}

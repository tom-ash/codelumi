import React from 'react'
import { TextInput } from '../../../../../../../../../../../../shared/app/components/support/text-input-semanticize/text-input'
import { validateApplicationLink } from './functions/validate-application-link'

interface ApplicationLinkInterface {
  (): React.ReactElement
}

export const ApplicationLink: ApplicationLinkInterface = () => {
  return (
    <div className='application-link'>
      <TextInput
        inputKey='applicationLink'
        validate={validateApplicationLink}
      />
    </div>
  )
}

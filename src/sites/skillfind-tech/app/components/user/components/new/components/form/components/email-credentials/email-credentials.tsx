import React from 'react'
import { useRender } from '../../../../../../../../../../shared/app/functions/store/use-render'
import { Email } from '../../../../../../../../../../shared/app/components/support/inputs/email/email'
import { Password } from '../../../../../../../../../../shared/app/components/support/inputs/password/password'

export const EmailCredentials = () => {
  const render = useRender()

  return (
    <fieldset className='email-credentials'>
      <Email />
      <Password />
    </fieldset>
  )
}

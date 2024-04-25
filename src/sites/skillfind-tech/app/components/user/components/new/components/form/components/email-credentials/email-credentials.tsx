import React from 'react'
import { EmailAddressInput } from '../../../../../../../../../../shared/app/components/user/components/common/components/email-address/email-address.input'
import { PasswordInput } from '../../../../../../../../../../shared/app/components/user/components/common/components/password/password.input'
import { PasswordAutoComplete } from '../../../../../../../../../../shared/app/components/user/components/common/components/password/password.input'
import { passwordValidator } from '../../../../../../../../../../shared/app/components/user/components/new/components/form/components/password/password.validator'
import { useRender } from '../../../../../../../../../../shared/app/functions/store/use-render'

export const EmailCredentials = () => {
  const render = useRender()

  const passwordInputProps = {
    autoComplete: PasswordAutoComplete.NEW_PASSWORD,
    validator: passwordValidator,
  }

  return (
    <fieldset className='email-credentials'>
      <EmailAddressInput />
      <PasswordInput {...passwordInputProps} />
    </fieldset>
  )
}

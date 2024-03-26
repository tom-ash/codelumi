import React from 'react'
import { EmailAddressInput } from '../../../../../../../../../../shared/app/components/user/components/common/components/email-address/email-address.input'
import { PasswordInput } from '../../../../../../../../../../shared/app/components/user/components/common/components/password/password.input'
import { TermsOfServiceConsent } from '../../../../../../../../../../shared/app/components/user/components/new/components/form/components/terms-of-service-consent/terms-of-service-consent'
import { SubmitFormButton } from './components/submit-form-button'
import { PasswordAutoComplete } from '../../../../../../../../../../shared/app/components/user/components/common/components/password/password.input'
import { passwordValidator } from '../../../../../../../../../../shared/app/components/user/components/new/components/form/components/password/password.validator'
// import { useTexts } from '../../../../../../../../../../shared/app/functions/store/use-texts'
import { useRender } from '../../../../../../../../../../shared/app/functions/store/use-render'

const UserNewEmailForm = () => {
  // const { headingOne } = useTexts()
  const render = useRender()
  const userNewForm = render['user/new/form']
  // const headingOneProps = { tier: 1, text: headingOne }

  const passwordInputProps = {
    autoComplete: PasswordAutoComplete.NEW_PASSWORD,
    validator: passwordValidator,
  }

  return (
    <form id='user-new-form'>
      <EmailAddressInput />
      <PasswordInput {...passwordInputProps} />
      <TermsOfServiceConsent />
      {userNewForm && <SubmitFormButton />}
    </form>
  )
}

export default UserNewEmailForm

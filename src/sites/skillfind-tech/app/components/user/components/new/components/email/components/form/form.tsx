import React from 'react'
import { EmailAddressInput } from '../../../../../../../../../../shared/app/components/user/components/common/components/email-address/email-address.input'
import { PasswordInput } from '../../../../../../../../../../shared/app/components/user/components/common/components/password/password.input'
import { TermsOfServiceConsent } from '../../../../../../../../../../shared/app/components/user/components/new/components/form/components/terms-of-service-consent/terms-of-service-consent'
import { SubmitButton } from './components/submit-button'
import { useStore } from '../../../../../../../../../../shared/app/functions/store/useStore'
import { Heading } from '../../../../../../../../../../mapawynajmu-pl/app/components/support/components/heading'
import { Line } from '../../../../../../../../../../mapawynajmu-pl/app/components/support/components/line/line'
import { PasswordAutoComplete } from '../../../../../../../../../../shared/app/components/user/components/common/components/password/password.input'
import { passwordValidator } from '../../../../../../../../../../shared/app/components/user/components/new/components/form/components/password/password.validator'

const UserNewEmailForm = () => {
  const { state } = useStore()
  const { render, texts } = state
  const { headingOne } = texts
  const userNewForm = render['user/new/form']
  const headingOneProps = { tier: 1, text: headingOne }

  const passwordInputProps = {
    autoComplete: PasswordAutoComplete.NEW_PASSWORD,
    validator: passwordValidator,
  }

  return (
    <form id='user-new-form'>
      {userNewForm && (
        <>
          <Heading {...headingOneProps} />
          <Line />
        </>
      )}
      <EmailAddressInput />
      <PasswordInput {...passwordInputProps} />
      <TermsOfServiceConsent />
      {userNewForm && <SubmitButton />}
    </form>
  )
}

export default UserNewEmailForm

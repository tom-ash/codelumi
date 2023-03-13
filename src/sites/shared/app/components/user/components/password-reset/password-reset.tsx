import React from 'react'
import { useStore } from '../../../../functions/store/useStore'
import { PasswordResetStep } from './password-reset.types'
import { Heading } from '../../../../../../mapawynajmu-pl/app/components/support/components/heading'
import { Line } from '../../../../../../mapawynajmu-pl/app/components/support/components/line/line'
import { EmailAddressInput } from '../common/components/email-address/email-address.input'
import { SubmitEmailButton } from './components/submit-email-button'
import { VerificationCodeInput } from '../new/components/verification/components/verification-code/verification-code'
import { SubmitVerificationCodeButton } from './components/submit-verification-code-button'
import { PasswordInput } from '../common/components/password/password.input'
import { SubmitPasswordButton } from './components/submit-password-button'
import { passwordValidator } from '../new/components/form/components/password/password.validator'
import { PasswordAutoComplete } from '../common/components/password/password.input'
import { Explanation } from '../../../support/explanation/explanationt'

const PasswordReset = () => {
  const { state } = useStore()
  const { texts, control } = state
  const { step } = control

  const { headingOne, emailAddressExplanation, verificationExplanation, passwordExplanation, successExplanation } =
    texts

  const headingProps = {
    tier: 1,
    text: headingOne,
  }

  const passwordProps = {
    autoComplete: PasswordAutoComplete.NEW_PASSWORD,
    validator: passwordValidator,
  }

  return (
    <div id='user-edit-password'>
      <Heading {...headingProps} />
      <Line />
      <form>
        {step === PasswordResetStep.EMAIL && (
          <>
            <Explanation explanation={emailAddressExplanation} />
            <EmailAddressInput />
            <SubmitEmailButton />
          </>
        )}
        {step === PasswordResetStep.VERIFICATION && (
          <>
            <Explanation explanation={verificationExplanation} />
            <VerificationCodeInput />
            <SubmitVerificationCodeButton />
          </>
        )}
        {step === PasswordResetStep.PASSWORD && (
          <>
            <Explanation explanation={passwordExplanation} />
            <PasswordInput {...passwordProps} />
            <SubmitPasswordButton />
          </>
        )}
        {step === PasswordResetStep.SUCCESS && <Explanation explanation={successExplanation} />}
      </form>
    </div>
  )
}

export default PasswordReset

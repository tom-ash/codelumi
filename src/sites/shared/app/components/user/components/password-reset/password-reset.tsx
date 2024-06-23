import React from 'react'
import { PasswordResetStep } from './password-reset.types'
import { Line } from '../../../../../../mapawynajmu-pl/app/components/support/components/line/line'
import { SubmitEmailButton } from './components/submit-email-button'
import { VerificationCodeInput } from '../new/components/verification/components/verification-code/verification-code'
import { SubmitVerificationCodeButton } from './components/submit-verification-code-button'
import { PasswordInput } from '../common/components/password/password.input'
import { SubmitPasswordButton } from './components/submit-password-button'
import { passwordValidator } from '../new/components/form/components/password/password.validator'
import { PasswordAutoComplete } from '../common/components/password/password.input'
import { Explanation } from '../../../support/explanation/explanationt'
import { useControl } from '../../../../functions/store/use-control'
import { useTexts } from '../../../../functions/store/use-texts'
import { MainHeading } from '../../../support/headings/main-heading'
import { Email } from '../../../support/inputs/email/email'

const PasswordReset = () => {
  const { step } = useControl()

  const { emailAddressExplanation, verificationExplanation, passwordExplanation, successExplanation } = useTexts()

  const passwordProps = {
    autoComplete: PasswordAutoComplete.NEW_PASSWORD,
    validator: passwordValidator,
  }

  return (
    <div id='user-edit-password'>
      <MainHeading icon='signIn' />
      <Line />
      <form>
        {step === PasswordResetStep.EMAIL && (
          <>
            <Explanation explanation={emailAddressExplanation} />
            <Email />
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

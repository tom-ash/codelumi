import React, { useContext } from 'react'
import { useStore } from '../../../../../../../../../../shared/app/functions/store/useStore'
import { PasswordResetStep } from './password-reset.types'
import { Heading } from '../../../../../../../support/components/heading'
import { Line } from '../../../../../../../support/components/line/line'
import { EmailAddressInput } from '../../../../../../../../../../shared/app/components/user/components/common/components/email-address/email-address.input'
import { SubmitEmailButton } from './components/submit-email-button'
import { VerificationCodeInput } from '../../../../../../../../../../shared/app/components/user/components/new/components/verification/components/verification-code/verification-code'
import { SubmitVerificationCodeButton } from './components/submit-verification-code-button'
import { PasswordInput } from '../../../../../../../../../../shared/app/components/user/components/common/components/password/password.input'
import { SubmitPasswordButton } from './components/submit-password-button'
import { passwordValidator } from '../../../../../../../../../../shared/app/components/user/components/new/components/form/components/password/password.validator'
import { PasswordAutoComplete } from '../../../../../../../../../../shared/app/components/user/components/common/components/password/password.input'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

const UserEditPassword = () => {
  useStyles(styles)

  const { state } = useStore()
  const { texts, control } = state
  const { step } = control

  const {
    headingOne
  } = texts

  const headingProps = {
    tier: 1,
    text: headingOne
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
          <div>
            <EmailAddressInput />
            <SubmitEmailButton />
          </div>
        )}
        {step === PasswordResetStep.VERIFICATION && (
          <div>
            <VerificationCodeInput />
            <SubmitVerificationCodeButton />
          </div>
        )}
        {step === PasswordResetStep.PASSWORD && (
          <div>
            <PasswordInput {...passwordProps} />
            <SubmitPasswordButton />
          </div>
        )}
        {step === PasswordResetStep.SUCCESS && (
          <div>
            SUCCESS!!!
          </div>
        )}
      </form>
    </div>
  )
}

export default UserEditPassword

import React from 'react'
import { VerificationCodeInput } from './components/verification-code/verification-code'
import { useStore } from '../../../../../../functions/store/useStore'
import { Heading } from '../../../../../../../../mapawynajmu-pl/app/components/support/components/heading'
import { Line } from '../../../../../../../../mapawynajmu-pl/app/components/support/components/line/line'
import { SubmitButton } from './components/submit-button/submit-button'

const UserNewEmailVerification = () => {
  const { state } = useStore()
  const { texts } = state
  const { headingOne, verificationCodeExplanation } = texts

  return (
    <div id='user-new-email-verification'>
      <Heading
        tier={1}
        text={headingOne}
      />
      <Line />
      <div className='explanation'>{verificationCodeExplanation}</div>
      <VerificationCodeInput />
      <SubmitButton />
    </div>
  )
}

export default UserNewEmailVerification

import React from 'react'
import VerificationInput from 'react-verification-input'
import { useTexts } from '../../../../../../../../shared/app/functions/store/use-texts'
import { sendVerificationCode } from './functions/send-verification-code'
import { useApp } from '../../../../../../../../shared/app/functions/store/use-app'

export const Verify = () => {
  const { heading, instructions } = useTexts()
  const { lang } = useApp()

  return (
    <div className='verify'>
      <h1>{heading}</h1>
      <div className='instructions'>{instructions}</div>
      <VerificationInput
        length={4}
        validChars={'0-9'}
        autoFocus={true}
        onComplete={async value => {
          await sendVerificationCode({
            verificationCode: value,
            lang,
          })
        }}
      />
    </div>
  )
}

export default Verify

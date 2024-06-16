import React from 'react'
import VerificationInput from 'react-verification-input'
import { useTexts } from '../../../../../../../../shared/app/functions/store/use-texts'
import { sendVerificationCode } from './functions/send-verification-code'
import { useApp } from '../../../../../../../../shared/app/functions/store/use-app'
import { MainHeading } from '../../../../../../../../shared/app/components/support/headings/main-heading'
import { useDispatch } from 'react-redux'
import { useControl } from '../../../../../../../../shared/app/functions/store/use-control'
import { useErrors } from '../../../../../../../../shared/app/functions/store/use-errors'
import { RotatingLines } from 'react-loader-spinner'

export const Verify = () => {
  const { instructions, verificationCodeInvalidError } = useTexts()
  const { transferringVerificationCode } = useControl()
  const { lang } = useApp()
  const { verificationCode: error } = useErrors()
  const dispatch = useDispatch()
  const setErrors = (value: any) => dispatch({ type: 'errors', value })
  const setControl = (value: any) => dispatch({ type: 'control', value })

  return (
    <div id='visitor-users-new-verify'>
      <MainHeading icon='envelopeCheck' />
      <div className='instructions'>{instructions}</div>
      {transferringVerificationCode ? (
        <div className='loader'>
          <RotatingLines
            visible={true}
            width="40"
            strokeColor="#17202A"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
          />
        </div>
      ) : (
        <VerificationInput
          length={4}
          validChars={'0-9'}
          autoFocus={true}
          onChange={() => {
            setErrors({ verificationCode: null })
          }}
          onComplete={async value => {
            await sendVerificationCode({
              verificationCode: value,
              lang,
              setErrors,
              setControl,
              error: verificationCodeInvalidError,
            })
          }}
        />
      )}
      {error && (
        <div className='error'>
          {error}
        </div>
      )}
    </div>
  )
}

export default Verify

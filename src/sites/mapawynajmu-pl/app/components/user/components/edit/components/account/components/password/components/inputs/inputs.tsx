import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../../../../../../../../../constants/context'
import { VerificationCodeInput } from './components/verification-code-input'
import { EMPTY_LANG_OBJECT } from '../../../../../../../../../../constants/lang-objects/empty'
import { validateVerificationCode } from './validators/validate-verification-code'
import { SubmitButton } from './components/submit-button'
import { requestVerification } from './connectors/request-verification'
import Spinner from '../../../../../../../../../support/components/spinner/components/windmill/windmill'
import { useStore } from 'react-redux'
import { VERIFICATION_CODE_TEST } from './texts/verification-code-text'

export enum InputsSteps {
  VERIFICATION_CODE_REQUEST='verification-code-request',
  VERIFICATION_CODE_INPUT='verification-code-input',
  PASSWORD_INPUT='verification-code-input',
}

export const Inputs = () => {
  const { langHandler } = useContext(AppContext)
  const [step, changeStep] = useState('verification-code-request')
  const [connecting, changeConnecting] = useState(false)
  const [verificationCode, changeVerificationCode] = useState('')
  const [verificationCodeError, changeVerificationCodeError] = useState(EMPTY_LANG_OBJECT)
  const {
    app: { lang },
    user: {
      edit: {
        data: { email },
      },
    },
  } = useStore().getState()

  const verificationCodeInputProps = {
    value: verificationCode,
    error: verificationCodeError,
    changeValue: changeVerificationCode,
    validateValue: () =>
      validateVerificationCode({ value: verificationCode, changeError: changeVerificationCodeError }),
    changeError: changeVerificationCodeError,
  }

  const submitVerificationCodeButtonProps = {
    connecting,
    label: langHandler({ pl: 'Potwierdź', en: 'Confirm' }),
    onClick: () => 'Clicked!',
  }

  const requestVerificationProps = {
    email,
    lang,
    changeConnecting,
    changeStep,
  }

  useEffect(() => requestVerification(requestVerificationProps), [])

  return (
    <div className='inputs'>
      {step === 'verification-code-request' && <Spinner spinnerClass='windmill-medium-spinner' />}
      {step === 'verification-code-input' && (
        <div className='verification-code-input'>
          <div className='guide'>
            {langHandler(VERIFICATION_CODE_TEST)}
          </div>
          <VerificationCodeInput {...verificationCodeInputProps} />
          <SubmitButton {...submitVerificationCodeButtonProps} />
        </div>
      )}
    </div>
  )
}

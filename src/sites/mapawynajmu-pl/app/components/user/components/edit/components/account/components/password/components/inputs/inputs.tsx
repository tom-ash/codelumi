import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../../../../../../../../../constants/context'
import { VerificationCodeInput } from './components/verification-code-input'
import { EMPTY_LANG_OBJECT } from '../../../../../../../../../../constants/lang-objects/empty'
import { validateVerificationCode } from '../../../../../../../../common/validators/validate-verification-code'
import { SubmitButton } from './components/submit-button'
import { requestVerificationCode } from './connectors/request-verification-code'
import Spinner from '../../../../../../../../../support/components/spinner/components/windmill/windmill'
import { useStore } from 'react-redux'
import { PROVIDE_VERIFICATION_CODE_TEXT } from './texts/provide-verification-code-text'
import { PROVIDE_PASSWORD_TEXT } from './texts/provide-password-text'
import { confirmVerificationCode } from './connectors/confirm-verification-code'
import { PasswordInput } from './components/password-input'
import { validatePassword } from '../../../../../../../../common/validators/validate-password'
import { EMPTY_STRING } from '../../../../../../../../../../common/empty_string'
import { updatePassword } from './connectors/update-password'

export enum InputsSteps {
  VERIFICATION_CODE_REQUEST = 'verification-code-request',
  VERIFICATION_CODE_INPUT = 'verification-code-input',
  PASSWORD_INPUT = 'password-input',
}

interface InputsProps {
  closeCell?(): void
}

export const Inputs = (props: InputsProps) => {
  const { closeCell } = props
  const { langHandler } = useContext(AppContext)
  const [step, setStep] = useState(InputsSteps.VERIFICATION_CODE_REQUEST)
  const [connecting, setConnecting] = useState(false)
  const [verificationCode, setVerificationCode] = useState(EMPTY_STRING)
  const [verificationCodeError, setVerificationCodeError] = useState(EMPTY_LANG_OBJECT)
  const [password, setPassword] = useState(EMPTY_STRING)
  const [passwordError, setPasswordError] = useState(EMPTY_LANG_OBJECT)
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
    changeValue: setVerificationCode,
    validateValue: () => validateVerificationCode({ value: verificationCode, changeError: setVerificationCodeError }),
    changeError: setVerificationCodeError,
  }

  const confirmVerificationCodeProps = {
    email,
    connecting,
    verificationCode,
    setConnecting,
    setStep,
    changeError: setVerificationCodeError,
  }

  const submitVerificationCodeButtonProps = {
    connecting,
    label: langHandler({ pl: 'Potwierdź', en: 'Confirm' }),
    onClick: () => confirmVerificationCode(confirmVerificationCodeProps),
  }

  const requestVerificationProps = {
    email,
    lang,
    setConnecting,
    setStep,
  }

  useEffect(() => requestVerificationCode(requestVerificationProps), [])

  const passwordInputProps = {
    password,
    passwordError,
    setPassword,
    validatePassword,
    setPasswordError,
  }

  const updatePasswordProps = {
    connecting,
    email,
    password,
    verificationCode,
    setConnecting,
    setPasswordError,
    closeCell,
  }

  const passwordSubmitButtonProps = {
    connecting,
    label: langHandler({ pl: 'Potwierdź', en: 'Confirm' }),
    onClick: () => updatePassword(updatePasswordProps),
  }

  return (
    <form className='inputs'>
      {step === InputsSteps.VERIFICATION_CODE_REQUEST && <Spinner spinnerClass='windmill-medium-spinner' />}
      {step === InputsSteps.VERIFICATION_CODE_INPUT && (
        <div className='verification-code-input'>
          <div className='guide'>{langHandler(PROVIDE_VERIFICATION_CODE_TEXT)}</div>
          <VerificationCodeInput {...verificationCodeInputProps} />
          <SubmitButton {...submitVerificationCodeButtonProps} />
        </div>
      )}
      {step === InputsSteps.PASSWORD_INPUT && (
        <div className='password-input'>
          <div className='guide'>{langHandler(PROVIDE_PASSWORD_TEXT)}</div>
          <PasswordInput {...passwordInputProps} />
          <SubmitButton {...passwordSubmitButtonProps} />
        </div>
      )}
    </form>
  )
}

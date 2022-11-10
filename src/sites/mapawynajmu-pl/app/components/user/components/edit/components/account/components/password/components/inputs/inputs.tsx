import React, { useContext, useState } from 'react'
// import AppContext from '../../../../../../../../../../constants/context'
import { VerificationCodeInput } from './components/verification-code-input'
import { EMPTY_LANG_OBJECT } from '../../../../../../../../../../constants/lang-objects/empty'
import { validateVerificationCode } from './helpers/validate-verification-code'

export const Inputs = () => {
  const [verificationCode, changeVerificationCode] = useState('')
  const [verificationCodeError, changeVerificationCodeError] = useState(EMPTY_LANG_OBJECT)

  const verificationCodeInputProps = {
    value: verificationCode,
    error: verificationCodeError,
    changeValue: changeVerificationCode,
    validateValue: () => validateVerificationCode({ value: verificationCode, changeError: changeVerificationCodeError }),
    changeError: changeVerificationCodeError
  }

  return (
    <div className='inputs'>
      <VerificationCodeInput {...verificationCodeInputProps} />
    </div>
  )
}

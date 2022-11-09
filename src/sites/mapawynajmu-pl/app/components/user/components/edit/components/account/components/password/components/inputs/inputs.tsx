import React, { useContext, useState } from 'react'
// import AppContext from '../../../../../../../../../../constants/context'
import { VerificationCode } from './components/verification-code-input'

console.log(VerificationCode)

export const Inputs = () => {
  // const { langHandler } = useContext(AppContext)
  const [verificationCode, changeVerificationCode] = useState('')

  const verificationCodeInputProps = {
    value: verificationCode,
    changeValue: changeVerificationCode,
  }

  return (
    <div className='inputs'>
      <VerificationCode {...verificationCodeInputProps} />
    </div>
  )
}

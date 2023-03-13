import React, { useEffect } from 'react'
import { useStore } from '../../../../../../shared/app/functions/store/useStore'
import { VerificationCodeInput } from '../../../../../../shared/app/components/user/components/new/components/verification/components/verification-code/verification-code'
import { initializeDeletion } from './functions/initialize-deletion'
import { SubmitVerificationCodeButton } from './components/submit-verification-code-button'

export const UserDelete = () => {
  const { state, dispatch } = useStore()
  const { app, texts, data } = state
  const { lang } = app
  const { userDeleteInputExplanation } = texts
  const { email } = data
  const setControl = (value: any) => dispatch({ type: 'control', value })

  useEffect(() => {
    initializeDeletion({
      lang,
      email,
      setControl,
    })
  }, [])

  return (
    <div id='user-delete'>
      <div className='explanation'>{userDeleteInputExplanation}</div>
      <VerificationCodeInput />
      <SubmitVerificationCodeButton />
    </div>
  )
}

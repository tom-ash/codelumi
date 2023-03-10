import React from 'react'
import { useStore } from '../../../../../../../functions/store/useStore'

export const CredentialsError = () => {
  const { state } = useStore()
  const { texts, errors } = state

  const {
    credentialsInvalidError
  } = texts

  const {
    credentials: credentialsInvalidErrorTriggered
  } = errors

  const error = credentialsInvalidErrorTriggered && credentialsInvalidError

  if (!error) return null

  return (
    <div className='credentials-error'>
      {error}
    </div>
  )
}

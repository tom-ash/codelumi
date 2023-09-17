import React from 'react'
import { useTexts } from '../../../../../../../functions/store/use-texts'
import { useErrors } from '../../../../../../../functions/store/use-errors'

export const CredentialsError = () => {
  const { credentialsInvalidError } = useTexts()
  const { credentials: credentialsInvalidErrorTriggered } = useErrors()

  const error = credentialsInvalidErrorTriggered && credentialsInvalidError

  if (!error) return null

  return <div className='credentials-error'>{error}</div>
}

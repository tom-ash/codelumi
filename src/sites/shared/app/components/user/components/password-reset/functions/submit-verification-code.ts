import API_URL from '../../../../../../../mapawynajmu-pl/shared/constants/urls/api'
import { getCookieValue } from '../../../../visitor/components/legal/components/cookies/functions/save'
import { PasswordResetStep } from '../password-reset.types'

interface SubmitVerificationCode {
  (args: {
    verificationCode: string
    setControl: any // TODO: TS!
    setErrors: any // TODO: TS!
  }): void
}

export const submitVerificationCode: SubmitVerificationCode = args => {
  const { verificationCode, setControl, setErrors } = args
  const verificationToken = getCookieValue('verificationToken')

  fetch(API_URL + '/user/update/password/verify', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ verificationToken, verificationCode }),
  })
    .then(response => {
      if (response.status == 200) {
        return setControl({ step: PasswordResetStep.PASSWORD, connecting: false })
      }

      throw new Error('ServerError')
    })
    .catch(() => {
      setErrors({ verificationCode: true })
      setControl({ connecting: false })
    })
}

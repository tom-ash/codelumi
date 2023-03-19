import { getCookieValue } from '../../../../visitor/components/legal/components/cookies/functions/save'
import { hashPassword } from '../../../functions/hash-password'
import { PasswordResetStep } from '../password-reset.types'

interface SubmitPassword {
  (args: {
    apiUrl: string
    email: string
    verificationCode: string
    password: string
    setControl: any // TODO: TS!
  }): void
}

export const submitPassword: SubmitPassword = args => {
  const { apiUrl, email, verificationCode, password, setControl } = args

  const verificationToken = getCookieValue('verificationToken')
  const hashedPassword = hashPassword(password, email)

  fetch(apiUrl + '/user/update/password', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ verificationToken, verificationCode, password: hashedPassword }),
  })
    .then(response => {
      if (response.status == 200) {
        return setControl({ step: PasswordResetStep.SUCCESS })
      }

      throw new Error('ServerError')
    })
    .catch(() => setControl({ connecting: false })) // TODO: Add Sentry!
}

import setVerificationToken from '../../../../../functions/cookies/setters/confirmation-token'
import { PasswordResetStep } from '../password-reset.types'

interface SubmitEmail {
  (args: {
    apiUrl: string
    lang: Lang
    email: string
    setControl: any // TODO: TS!
  }): void
}

export const submitEmail: SubmitEmail = args => {
  const { apiUrl, lang, email, setControl } = args

  fetch(apiUrl + '/user/update/password/verification', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Lang: lang },
    body: JSON.stringify({ email }),
  })
    .then(response => {
      if (response.ok) return response.json()

      throw new Error('Unknown server error.')
    })
    .then(verificationToken => {
      setVerificationToken(verificationToken)
      setControl({ step: PasswordResetStep.VERIFICATION, connecting: false })
    })
    .catch(() => setControl({ connecting: false })) // TODO: Add Sentry!
}

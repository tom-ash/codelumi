import API_URL from '../../../../../../../../../../shared/constants/urls/api'
import { hashPassword } from '../../../../../../../functions/shared'
import { noError } from '../constants/no-error'
import { VERIFICATION_API_ROUTE, VERIFY_API_AOUTE, UPDATE_API_ROUTE } from '../constants/api_routes'

import getCookieValue from '../../../../../../../../../../../shared/app/functions/cookies/getters/get-cookie-value'
import setVerificationToken from '../../../../../../../../../../../shared/app/functions/cookies/setters/confirmation-token'

export function sendEmail() {
  const { lang, connecting, setControl } = this.props
  const email = document.getElementById('user-edit-password-email').value

  if (connecting || !this.emailManager('validate', email)) return

  setControl({ passwordConnecting: true })
  fetch(API_URL + VERIFICATION_API_ROUTE, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Lang: lang },
    body: JSON.stringify({ email }),
  })
    .then(
      response => {
        if (response.ok) {
          return response.json()
        }

        throw new Error('Unknown server error.')
      },
      networkError => console.dir(networkError.message)
    )
    .then(verificationToken => {
      setVerificationToken(verificationToken)
      setControl({ passwordStep: 'verificationCode', passwordConnecting: false })
    })
    .catch(e => console.dir(e))
}

export function sendVerification() {
  const { connecting, setControl, setErrors } = this.props
  const verificationToken = getCookieValue('verificationToken')
  const verificationCode = document.getElementById('user-edit-password-verification').value

  if (connecting || !this.verificationManager('validate', verificationCode)) return

  setControl({ passwordConnecting: true })
  fetch(API_URL + VERIFY_API_AOUTE, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ verificationToken, verificationCode }),
  })
    .then(response => {
      if (response.status == 200) {
        setControl({ passwordStep: 'password' })
        return setErrors({ password: noError })
      }
      throw new Error('ServerError')
    })
    .catch(() => {
      setErrors({
        password: { pl: 'Nieprawidłowy kod weryfikacyjny', en: 'Invalid verification code' },
      })
    })
    .finally(() => setControl({ passwordConnecting: false }))
}

export function sendPassword() {
  const { connecting, setControl } = this.props
  const verificationToken = getCookieValue('verificationToken')
  const verificationCode = document.getElementById('user-edit-password-verification').value
  const password = document.getElementById('user-edit-password').value
  const email = document.getElementById('user-edit-password-email').value
  const hashedPassword = hashPassword(password, email)

  if (connecting || !this.passwordManager('validate', password)) return

  setControl({ passwordConnecting: true })
  fetch(API_URL + UPDATE_API_ROUTE, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ verificationToken, verificationCode, password: hashedPassword }),
  })
    .then(response => {
      if (response.status == 200) {
        setControl({ passwordStep: 'success' })
        setErrors({ password: noError })
        setTimeout(() => {
          setControl({ passwordStage: 'success' })
        }, 1000)
        return
      }
      throw new Error('ServerError')
    })
    .catch(e => console.dir(e))
    .finally(() => setControl({ passwordConnecting: false }))
}

import API_URL from '../../../../../../../../../../shared/constants/urls/api'
import { hashPassword } from '../../../../../../../functions/shared'
import { noError } from '../constants/no-error'
import { VERIFICATION_API_ROUTE, VERIFY_API_AOUTE, UPDATE_API_ROUTE } from '../constants/api_routes'

export function sendEmail() {
  const { lang, connecting, setControl, changeErrors } = this.props
  const email = document.getElementById('user-edit-password-email').value

  if (connecting || !this.emailManager('validate', email)) return

  setControl({ passwordConnecting: true })
  fetch(API_URL + VERIFICATION_API_ROUTE, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Lang: lang },
    body: JSON.stringify({ email }),
  })
    .then(response => {
      if (response.status == 200) {
        setControl({ passwordStep: 'verificationCode' })
        changeErrors({ password: noError })
      }
      throw new Error('ServerError')
    })
    .finally(() => setControl({ passwordConnecting: false }))
}

export function sendVerification() {
  const { connecting, setControl, changeErrors } = this.props
  const verificationCode = document.getElementById('user-edit-password-verification').value
  const email = document.getElementById('user-edit-password-email').value

  if (connecting || !this.verificationManager('validate', verificationCode)) return

  setControl({ passwordConnecting: true })
  fetch(API_URL + VERIFY_API_AOUTE, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, verificationCode }),
  })
    .then(response => {
      if (response.status == 200) {
        setControl({ passwordStep: 'password' })
        return changeErrors({ password: noError })
      }
      throw new Error('ServerError')
    })
    .catch(() => {
      changeErrors({
        password: { pl: 'Nieprawidłowy kod weryfikacyjny', en: 'Invalid verification code' },
      })
    })
    .finally(() => setControl({ passwordConnecting: false }))
}

export function sendPassword() {
  const { connecting, setControl } = this.props
  const password = document.getElementById('user-edit-password').value
  const email = document.getElementById('user-edit-password-email').value
  const verificationCode = document.getElementById('user-edit-password-verification').value
  const hashedPassword = hashPassword(password, email)

  if (connecting || !this.passwordManager('validate', password)) return

  setControl({ passwordConnecting: true })
  fetch(API_URL + UPDATE_API_ROUTE, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password: hashedPassword, verificationCode }),
  })
    .then(response => {
      if (response.status == 200) {
        setControl({ passwordStep: 'success' })
        changeErrors({ password: noError })
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

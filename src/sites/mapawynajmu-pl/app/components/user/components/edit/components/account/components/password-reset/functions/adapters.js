import API_URL from '../../../../../../../../../../shared/constants/urls/api'
import { hashPassword } from '../../../../../../../functions/shared'
import { noError } from '../constants/no-error'
import { VERIFICATION_API_ROUTE, VERIFY_API_AOUTE, UPDATE_API_ROUTE } from '../constants/api_routes'

export function sendEmail() {
  const { lang, connecting, changeControl, changeErrors } = this.props
  const email = document.getElementById('user-edit-password-email').value

  if (connecting || !this.emailManager('validate', email)) return

  changeControl({ passwordConnecting: true })
  fetch(API_URL + VERIFICATION_API_ROUTE, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Lang: lang },
    body: JSON.stringify({ email }),
  })
    .then(response => {
      if (response.status == 200) {
        changeControl({ passwordStep: 'verificationCode' })
        changeErrors({ password: noError })
      }
      throw new Error('ServerError')
    })
    .finally(() => changeControl({ passwordConnecting: false }))
}

export function sendVerification() {
  const { connecting, changeControl, changeErrors } = this.props
  const verificationCode = document.getElementById('user-edit-password-verification').value
  const email = document.getElementById('user-edit-password-email').value

  if (connecting || !this.verificationManager('validate', verificationCode)) return

  changeControl({ passwordConnecting: true })
  fetch(API_URL + VERIFY_API_AOUTE, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, verificationCode }),
  })
    .then(response => {
      if (response.status == 200) {
        changeControl({ passwordStep: 'password' })
        return changeErrors({ password: noError })
      }
      throw new Error('ServerError')
    })
    .catch(() => {
      changeErrors({
        password: { pl: 'Nieprawidłowy kod weryfikacyjny', en: 'Invalid verification code' },
      })
    })
    .finally(() => changeControl({ passwordConnecting: false }))
}

export function sendPassword() {
  const { connecting, changeControl } = this.props
  const password = document.getElementById('user-edit-password').value
  const email = document.getElementById('user-edit-password-email').value
  const verificationCode = document.getElementById('user-edit-password-verification').value
  const hashedPassword = hashPassword(password, email)

  if (connecting || !this.passwordManager('validate', password)) return

  changeControl({ passwordConnecting: true })
  fetch(API_URL + UPDATE_API_ROUTE, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password: hashedPassword, verificationCode }),
  })
    .then(response => {
      if (response.status == 200) {
        changeControl({ passwordStep: 'success' })
        changeErrors({ password: noError })
        setTimeout(() => {
          changeControl({ passwordStage: 'success' })
        }, 1000)
        return
      }
      throw new Error('ServerError')
    })
    .catch(e => console.dir(e))
    .finally(() => changeControl({ passwordConnecting: false }))
}

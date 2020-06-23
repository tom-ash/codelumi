import { apiUrl } from '../../../../../../../../../constants/urls.js'
import { hashPassword } from '../../../../../../../functions/shared.js'
import { noError } from '../constants/no-error'

export function sendEmail() {
  const { language, connecting, changeControl, changeErrors } = this.props
  const email = document.getElementById('user-edit-password-email').value
  
  if (connecting || !this.emailManager('validate', email)) return

  changeControl({ passwordConnecting: true })
  fetch(apiUrl + '/user/edit/password/email', {
    method: 'PUT', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, language })
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
  fetch(apiUrl + '/user/edit/password/verification', {
    method: 'PUT', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, verification_code: verificationCode })
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
      password: { pl: 'Nieprawidłowy kod weryfikacyjny', en: 'Invalid verification code' }
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
  fetch(apiUrl + '/user/edit/password', {
    method: 'PUT', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, verification_code: verificationCode, password: hashedPassword })
  })
  .then(response => {
    if (response.status == 200) {
      changeControl({ passwordStep: 'success' })
      changeErrors({ password: noError })
      setTimeout(() => { changeControl({ passwordStage: 'success' }) }, 1000)
      return
    }
    throw new Error('ServerError')
  })
  .catch((e) => console.dir(e))
  .finally(() => changeControl({ passwordConnecting: false }))
}

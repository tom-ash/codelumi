import { apiUrl } from '../../../../../../../../../constants/urls.js'
import { getDerivedSaltForPassword } from '../../../../../../../functions/shared.js'
import { hashPassword } from '../../../../../../../functions/shared.js'
import { noError } from '../constants/no-error'
import { changeRoute } from '../../../../../../../../../functions/routers'

export function sendEmail() {
  if (this.props.connecting) return
  const email = document.getElementById('user-edit-password-email').value
  if (!this.emailManager('validate', email)) return
  this.props.changeControl({ passwordConnecting: true })
  fetch(apiUrl + '/user/edit/password/email', {
    method: 'PUT', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  })
  .then(response => {
    if (response.status == 200) {
      this.props.changeControl({ passwordStep: 'verificationCode' })
      this.props.changeErrors({ password: noError })
    }
    throw new Error('ServerError')
  })
  .catch(() => {/*TODO*/})
  .finally(() => this.props.changeControl({ passwordConnecting: false }))
}

export function sendVerification() {
  if (this.props.connecting) return
  const verificationCode = document.getElementById('user-edit-password-verification').value
  if (!this.verificationManager('validate', verificationCode)) return
  this.props.changeControl({ passwordConnecting: false })
  const email = document.getElementById('user-edit-password-email').value
  fetch(apiUrl + '/user/edit/password/verification', {
    method: 'PUT', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, verification_code: verificationCode })
  })
  .then(response => {
    if (response.status == 200) {
      this.props.changeControl({ passwordStep: 'password' })
      this.props.changeErrors({ password: noError })
      return
    }
    throw new Error('ServerError')
  })
  .catch(() => {
    this.props.changeErrors({
      password: { polish: 'nieprawidłowy kod weryfikacyjny', english: 'invalid verification code' }
    })
  })
  .finally(() => this.props.changeControl({ passwordConnecting: false }))
}

export function sendPassword() {
  if (this.props.connecting) return
  const password = document.getElementById('user-edit-password').value
  if (!this.passwordManager('validate', password)) return
  this.props.changeControl({ passwordConnecting: false })
  const email = document.getElementById('user-edit-password-email').value
  const verificationCode = document.getElementById('user-edit-password-verification').value
  getDerivedSaltForPassword(email)
  .then(salt => {
    const hashedPassword = hashPassword(password, salt)
    fetch(apiUrl + '/user/edit/password', {
      method: 'PUT', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, verification_code: verificationCode, password: hashedPassword })
    })
    .then(response => {
      if (response.status == 200) {
        this.props.changeControl({ passwordStep: 'success' })
        this.props.changeErrors({ password: noError })
        setTimeout(() => { this.props.changeControl({ passwordStage: 'success' }) }, 1000)
        if (this.props.path === '/resethasla' || this.props.path === '/resetpassword') {
          setTimeout(() => {
            this.props.changeControl({ passwordStage: null })
            changeRoute.call(this, null, '/signin')
          }, 2000)
        }
        return
      }
      throw new Error('ServerError')
    })
    .catch((e) => console.dir(e))
    .finally(() => this.props.changeControl({ passwordConnecting: false }))
  })
}
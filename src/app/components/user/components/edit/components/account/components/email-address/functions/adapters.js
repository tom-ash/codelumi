import { apiUrl } from '../../../../../../../../../constants/urls.js'
import { getDerivedSaltForPassword } from '../../../../../../../functions/shared.js'
import { hashPassword } from '../../../../../../../functions/shared.js'
import { getUserToken } from '../../../../../../authorize/components/tokens/functions/get-tokens'

export function sendCurrentEmailAddress() {
  if (this.props.connecting) return
  this.props.changeControl({ emailConnecting: true })
  const uT = getUserToken()
  fetch(apiUrl + '/user/edit/email/send_current', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      uT,
      language: this.props.language
    },
    body: JSON.stringify({ email: this.props.currentValue })
  })
  .then(response => {
    if (response.status == 200) return this.props.changeControl({ emailStep: 'currentEmailVerification' })
    throw new Error('SomethingWentWrong')
  })
  .catch((error) => console.dir(error))
  .finally(() => this.props.changeControl({ emailConnecting: false }))
}

export function sendCurrentEmailVerification(verificationCode) {
  const { changeControl } = this.props
  if (this.props.connecting) return
  this.props.changeControl({ emailConnecting: true })
  const uT = getUserToken()
  fetch(apiUrl + '/user/edit/email/verify/current', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      uT
    },
    body: JSON.stringify({ verification_code: verificationCode })
  })
  .then(response => {
    if (response.status == 200) return changeControl({ emailStep: 'newEmail' })
    throw new Error('SomethingWentWrong')
  })
  .catch((error) => console.dir(error))
  .finally(() => changeControl({ emailConnecting: false }))
}

export function sendNewEmail(newEmail) {
  if (this.props.connecting) return
  this.props.changeControl({ emailConnecting: true })
  const uT = getUserToken()
  fetch(apiUrl + '/user/edit/email/new', {
    method: 'PUT', headers: {
      'Content-Type': 'application/json',
      uT,
      language: this.props.language
    },
    body: JSON.stringify({ new_email: newEmail })
  })
  .then(response => {
    if (response.status == 200) return this.props.changeControl({ emailStep: 'newEmailVerification' })
    throw new Error('SomethingWentWrong')
  })
  .catch((error) => console.dir(error))
  .finally(() => this.props.changeControl({ emailConnecting: false }))
}

export function sendNewEmailVerification(newEmailVerification) {
  if (this.props.connecting) return
  const currentEmailVerification = document.getElementById('user-edit-email-current-verification').value
  this.props.changeControl({ emailConnecting: true })
  const uT = getUserToken()
  fetch(apiUrl + '/user/edit/email/verify/new', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      uT
    },
    body: JSON.stringify({ verification_code: currentEmailVerification + newEmailVerification })
  })
  .then(response => {
    if (response.status == 200) return this.props.changeControl({ emailStep: 'password' })
    throw new Error('SomethingWentWrong')
  })
  .catch((error) => console.dir(error))
  .finally(() => this.props.changeControl({ emailConnecting: false }))
}

export function sendPassword(password) {
  const { currentValue } = this.props
  if (this.props.connecting) return
  const currentEmailVerification = document.getElementById('user-edit-email-current-verification').value
  const email = document.getElementById('user-edit-email-new').value
  const newEmailVerification = document.getElementById('user-edit-email-new-verification').value
  this.props.changeControl({ emailConnecting: true })
  const uT = getUserToken()
  getDerivedSaltForPassword(currentValue)
  .then(salt => {
    const oldHashedPassword = hashPassword(password, salt)
    getDerivedSaltForPassword(email)
    .then(salt => {
      const newHashedPassword = hashPassword(password, salt)
      fetch(apiUrl + '/user/edit/email', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          uT
        },
        body: JSON.stringify({
          verification_code: currentEmailVerification + newEmailVerification,
          old_password: oldHashedPassword, new_password: newHashedPassword
        })
      })
      .then(response => {
        if (response.status == 200) {
          this.props.changeData({ email })
          this.props.changeControl({ emailStep: 'success', emailStage: 'success' })
          return
        }
        throw new Error('SomethingWentWrong')
      })
      .catch((error) => console.dir(error))
      .finally(() => this.props.changeControl({ emailConnecting: false }))
    })
  })
}
import { apiUrl } from '../../../../../../../../../constants/urls.js'
import { hashPassword } from '../../../../../../../functions/shared.js'
import { getAccessToken } from '../../../../../../authorize/components/tokens/functions/get-tokens'

export function sendCurrentEmailAddress() {
  const { changeControl, connecting, language, currentValue } = this.props

  if (connecting) return

  changeControl({ emailConnecting: true })
  fetch(apiUrl + '/user/edit/email/send_current', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', access_token: getAccessToken(), language },
    body: JSON.stringify({ email: currentValue })
  })
  .then(response => {
    if (response.ok) return changeControl({ emailStep: 'currentEmailVerification' })
    throw new Error('SomethingWentWrong')
  })
  .catch((error) => console.dir(error))
  .finally(() => changeControl({ emailConnecting: false }))
}

export function sendCurrentEmailVerification(verificationCode) {
  const { changeControl, connecting,  } = this.props

  if (connecting) return

  changeControl({ emailConnecting: true })
  fetch(apiUrl + '/user/edit/email/verify/current', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', access_token: getAccessToken() },
    body: JSON.stringify({ verificationCode })
  })
  .then(response => {
    if (response.ok) return changeControl({ emailStep: 'newEmail' })
    throw new Error('SomethingWentWrong')
  })
  .catch((error) => console.dir(error))
  .finally(() => changeControl({ emailConnecting: false }))
}

export function sendNewEmail(newEmail) {
  const { changeControl, connecting, language } = this.props

  if (connecting) return

  changeControl({ emailConnecting: true })
  fetch(apiUrl + '/user/edit/email/new', {
    method: 'PUT', headers: { 'Content-Type': 'application/json', access_token: getAccessToken(), language },
    body: JSON.stringify({ new_email: newEmail })
  })
  .then(response => {
    if (response.ok) return changeControl({ emailStep: 'newEmailVerification' })
    throw new Error('SomethingWentWrong')
  })
  .catch((error) => console.dir(error))
  .finally(() => changeControl({ emailConnecting: false }))
}

export function sendNewEmailVerification(newEmailVerification) {
  const { changeControl, connecting } = this.props
  const currentEmailVerification = document.getElementById('user-edit-email-current-verification').value

  if (connecting) return

  changeControl({ emailConnecting: true })
  fetch(apiUrl + '/user/edit/email/verify/new', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', access_token: getAccessToken() },
    body: JSON.stringify({ verification_code: currentEmailVerification + newEmailVerification })
  })
  .then(response => {
    if (response.ok) return changeControl({ emailStep: 'password' })
    throw new Error('SomethingWentWrong')
  })
  .catch(error => console.dir(error))
  .finally(() => changeControl({ emailConnecting: false }))
}

export function sendPassword(password) {
  const { currentValue, changeControl, connecting } = this.props
  const currentEmailVerification = document.getElementById('user-edit-email-current-verification').value
  const email = document.getElementById('user-edit-email-new').value
  const newEmailVerification = document.getElementById('user-edit-email-new-verification').value

  if (connecting) return

  changeControl({ emailConnecting: true })

  fetch(apiUrl + '/user/edit/email', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      access_token: getAccessToken()
    },
    body: JSON.stringify({
      verification_code: currentEmailVerification + newEmailVerification,
      oldPassword: hashPassword(password, currentValue), newPassword: hashPassword(password, email)
    })
  })
  .then(response => {
    if (response.ok) {
      this.props.changeData({ email })
      return this.props.changeControl({ emailStep: 'success', emailStage: 'success' })
    }
    throw new Error('SomethingWentWrong')
  })
  .catch((error) => console.dir(error))
  .finally(() => changeControl({ emailConnecting: false }))
}
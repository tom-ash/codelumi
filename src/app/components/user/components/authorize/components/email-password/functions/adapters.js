import { hashPassword } from '../../../../../functions/shared.js'
import { apiUrl } from '../../../../../../../constants/urls.js'
import { saveTokens } from '../../../../../functions/token-handlers'

export function logIn() {
  const email = document.getElementById('user-logon-email-address').value.toLowerCase()
  let password = document.getElementById('user-logon-password').value
  this.props.changeControl({ connecting: true })
  password = hashPassword(password, email)
  this.props.changeControl({ connecting: true })

  fetch(apiUrl + '/authorize_with_email', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'emailAddress': email,
      'password': password
    }
  })
  .then(response => {
    if (response.status == 200) return response.json()
    throw new Error('InvalidCredentials')
  })
  .then(json => {
    this.props.changeData({
      accountType: json.accountType,
      authorized: true,
      name: json.name,
      phoneVerified: json.phoneVerified
    })
    saveTokens.call(this, json.accessToken)
    TODO
  })
  .catch(() => {
    this.props.changeErrors({
      emailOrPassword: {
        pl: 'Nieprawidłowy adres email lub hasło.', en: 'Invalid email address and/or password.'
      }
    })
  })
  .finally(() => {
    this.props.changeControl({ connecting: false })
  })
}

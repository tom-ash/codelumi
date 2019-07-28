import { getDerivedSaltForPassword } from '../../../../../functions/shared.js'
import { hashPassword } from '../../../../../functions/shared.js'
import { apiUrl } from '../../../../../../../constants/urls.js'
import { saveTokens } from '../../../../../functions/token-handlers'

export function logIn() {
  const email = document.getElementById('user-logon-email-address').value
  let password = document.getElementById('user-logon-password').value
  this.props.changeControl({ connecting: true })
  getDerivedSaltForPassword(email)
  .then(salt => {
    password = hashPassword(password, salt)
    this.props.changeControl({ connecting: true })
    fetch(apiUrl + '/authorize_with_email_and_password', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'emailAddress': email, 'password': password }
    })
    .then(response => {
      if (response.status == 200) return response.json()
      throw new Error('InvalidCredentials')
    })
    .then(jsonResponse => {
      this.props.changeData({ authorized: true, name: jsonResponse.name, phoneVerified: jsonResponse.phone_verified })
      saveTokens.call(this, jsonResponse.UST, jsonResponse.UAT)
      this.changeRoute(null, 'myAccount')
    })
    .catch(() => {
      this.props.changeErrors({
        emailOrPassword: {
          polish: 'nieprawidłowy adres email lub hasło', english: 'invalid email address and/or password'
        }
      })
    })
    .finally(() => {
      this.props.changeControl({ connecting: false })
    })
  })
}
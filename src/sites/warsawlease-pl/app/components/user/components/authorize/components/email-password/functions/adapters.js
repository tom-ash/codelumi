import { hashPassword } from '../../../../../functions/shared.js'
import API_URL from '../../../../../../../../shared/constants/urls/api.js'
import { saveTokens } from '../../../../../functions/token-handlers'
import { SIGN_IN_API_ROUTE } from '../constants/api_routes.js'

export function logIn() {
  const email = document.getElementById('user-logon-email-address').value.toLowerCase()
  let password = document.getElementById('user-logon-password').value
  const { changeControl, changeData, changeErrors } = this.props

  changeControl({ connecting: true })
  password = hashPassword(password, email)

  fetch(API_URL + SIGN_IN_API_ROUTE, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  .then(response => {
    if (response.status == 200) return response.json()
    throw new Error('InvalidCredentials')
  })
  .then(json => {
    const { changeRoute } = this.context

    changeData({ accountType: json.accountType, authorized: true, name: json.name })
    saveTokens.call(this, json.accessToken)

    // TODO CHANGE ROUTE
    changeRoute({ href })
  })
  .catch(() => {
    changeErrors({
      emailOrPassword: { pl: 'Nieprawidłowy adres email lub hasło.', en: 'Invalid email address and/or password.' }
    })
  })
  .finally(() => {
    changeControl({ connecting: false })
  })
}

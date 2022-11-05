import { hashPassword } from '../../../../../functions/shared'
import API_URL from '../../../../../../../../shared/constants/urls/api'
import { saveTokens } from '../../../../../functions/token-handlers'
import { SIGN_IN_API_ROUTE } from '../constants/api_routes'
import { buildUrl } from '../../../../../../../../shared/functions/builders/url'

export function logIn() {
  const email = document.getElementById('user-logon-email-address').value.toLowerCase()
  let password = document.getElementById('user-logon-password').value
  const { changeControl, changeData, changeErrors, lang } = this.props

  changeControl({ connecting: true })
  password = hashPassword(password, email)

  fetch(API_URL + SIGN_IN_API_ROUTE, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Lang: lang,
    },
    body: JSON.stringify({ email, password }),
  })
    .then(response => {
      if (response.status == 200) return response.json()
      throw new Error('InvalidCredentials')
    })
    .then(jsonResponse => {
      const { accountType, name, accessToken, path } = jsonResponse
      const { changeRoute } = this.context

      changeData({ accountType, name, authorized: true })
      saveTokens.call(this, accessToken)
      changeRoute({ href: buildUrl({ path }) })
    })
    .catch(() => {
      changeErrors({
        emailOrPassword: { pl: 'Nieprawidłowy adres email lub hasło.', en: 'Invalid email address and/or password.' },
      })
    })
    .finally(() => {
      changeControl({ connecting: false })
    })
}

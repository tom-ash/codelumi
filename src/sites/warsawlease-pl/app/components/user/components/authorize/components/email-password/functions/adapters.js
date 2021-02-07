import { hashPassword } from '../../../../../functions/shared.js'
import { apiUrl } from '../../../../../../../constants/urls.js'
import { saveTokens } from '../../../../../functions/token-handlers'
import { ROOT_TRACK } from '../../../../../../../../shared/constants/tracks/tracks'
import changeRouteWithHref from '../../../../../../../functions/routers/change-route-with-href.js'

export function logIn() {
  const email = document.getElementById('user-logon-email-address').value.toLowerCase()
  let password = document.getElementById('user-logon-password').value
  const {
    changeControl,
    changeData,
    changeErrors
  } = this.props

  changeControl({ connecting: true })
  password = hashPassword(password, email)

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
    const track = ROOT_TRACK
    const { lang } = this.props
    const { changeRoute } = this.context

    changeData({ accountType: json.accountType, authorized: true, name: json.name })
    saveTokens.call(this, json.accessToken)
    changeRouteWithHref({ track, lang, changeRoute })
  })
  .catch(() => {
    changeErrors({
      emailOrPassword: {
        pl: 'Nieprawidłowy adres email lub hasło.', en: 'Invalid email address and/or password.'
      }
    })
  })
  .finally(() => {
    changeControl({ connecting: false })
  })
}

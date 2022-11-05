import API_URL from '../../../../../../shared/constants/urls/api'
import getAccessToken from '../../auth/components/tokens/functions/get-tokens'
import { VERIFY_API_ROUTE_DATA, DELETE_API_ROUTE_DATA } from '../constants/api_route_data'
import { deauthorizeUser } from '../../auth/functions/adapters'

export function sendEmail() {
  const { changeControl, connecting, email, lang } = this.props

  if (connecting) return

  const { method, route } = VERIFY_API_ROUTE_DATA

  changeControl({ connecting: true })

  fetch(API_URL + route, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': getAccessToken(),
      lang,
    },
    body: JSON.stringify({ email }),
  })
    .then(response => {
      if (response.ok) return changeControl({ step: 'verification' })

      throw new Error('Server Error')
    })
    .catch(error => console.dir(error))
    .finally(() => changeControl({ connecting: false }))
}

export function destroy() {
  const { lang, connecting, changeControl } = this.props
  const verificationCode = document.getElementById('user-destroy-verification').value

  if (connecting || !this.verificationManager('validate', verificationCode)) return

  changeControl({ connecting: true })

  const { method, route } = DELETE_API_ROUTE_DATA

  fetch(API_URL + route, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': getAccessToken(),
      Lang: lang,
    },
    body: JSON.stringify({ verificationCode }),
  })
    .then(response => {
      if (response.ok) return response.json()

      this.props.changeErrors({
        verification: {
          pl: 'Nieprawidłowy kod weryfikacyjny',
          en: 'Invalid verification code',
        },
      })
      throw new Error('Invalid Verification Code Error')
    })
    .then(json => {
      const { path } = json
      const { dispatch } = this.props
      const { changeRoute } = this.context

      deauthorizeUser({ dispatch, changeRoute, path })
    })
    .catch(error => console.dir(error))
    .finally(() => changeControl({ connecting: false }))
}

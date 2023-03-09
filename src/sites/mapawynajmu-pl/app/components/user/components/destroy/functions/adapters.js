import API_URL from '../../../../../../shared/constants/urls/api'
import { getAccessToken } from '../../auth/functions/get-access-token'
import { VERIFY_API_ROUTE_DATA, DELETE_API_ROUTE_DATA } from '../constants/api_route_data'
import { signOut } from '../../auth/components/sign-out/functions/sign-out'
import getCookieValue from '../../../../../../../shared/app/functions/cookies/getters/get-cookie-value'
import setVerificationToken from '../../../../../../../shared/app/functions/cookies/setters/confirmation-token'

export function sendEmail() {
  const { setControl, connecting, email, lang } = this.props

  if (connecting) return

  const { method, route } = VERIFY_API_ROUTE_DATA

  setControl({ connecting: true })

  fetch(API_URL + route, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': getAccessToken(),
      lang,
    },
    body: JSON.stringify({ email }),
  })
  .then(
    response => {
      if (response.ok) return response.json()

      throw new Error('Unknown server error.')
    },
    networkError => console.dir(networkError.message)
  )
  .then(verificationToken => {
    setVerificationToken(verificationToken)
    setControl({ step: 'verification', connecting: false })
  })
  .catch(e => console.dir(e))
}

export function destroy() {
  const { lang, connecting, setControl } = this.props
  const verificationToken = getCookieValue('verificationToken')
  const verificationCode = document.getElementById('user-destroy-verification').value

  if (connecting || !this.verificationManager('validate', verificationCode)) return

  setControl({ connecting: true })

  const { method, route } = DELETE_API_ROUTE_DATA

  fetch(API_URL + route, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': getAccessToken(),
      Lang: lang,
    },
    body: JSON.stringify({ verificationToken, verificationCode }),
  })
    .then(response => {
      if (response.ok) return response.json()

      this.props.setErrors({
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

      signOut({ dispatch, changeRoute, path })
    })
    .catch(error => console.dir(error))
}

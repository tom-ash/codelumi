import API_URL from '../../../../../../../../../../shared/constants/urls/api'
import { VERIFY_API_ROUTE } from '../constants/api_routes'
import { saveTokens } from '../../../../../../../functions/token-handlers'
import getCookieValue from '../../../../../../../../../../../shared/app/functions/cookies/getters/get-cookie-value'

export function verify() {
  if (!this.verificationManager('validate')) return

  const confirmationToken = getCookieValue('confirmation_token')
  const verificationCode = document.getElementById('user-create-email-verification').value
  const { lang, set_User, setControl, setErrors } = this.props

  setControl({ connecting: true })

  fetch(API_URL + VERIFY_API_ROUTE, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Lang: lang,
    },
    body: JSON.stringify({ confirmationToken, verificationCode }),
  })
    .then(response => {
      if (response.status == 200) return response.json()

      throw new Error('SomethingWentWrong')
    })
    .then(json => {
      const { accessToken, name, href } = json
      const { changeRoute } = this.context

      saveTokens.call(this, accessToken)
      set_User({ authorized: true, name })
      changeRoute({ href })
      setControl({ connecting: false })
    })
    .catch(() =>
      setErrors({ verification: { pl: 'Nieprawidłowy kod weryfikacyjny', en: 'Invalid verification code' } })
    )
    .finally(() => setControl({ connecting: false }))
}

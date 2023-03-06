import API_URL from '../../../../../../../../../../shared/constants/urls/api'
import { VERIFY_API_ROUTE } from '../constants/api_routes'
import { saveTokens } from '../../../../../../../functions/token-handlers'
import getCookieValue from '../../../../../../../../../../../shared/app/functions/cookies/getters/get-cookie-value'

export function verify() {
  if (!this.verificationManager('validate')) return

  const verificationToken = getCookieValue('verificationToken')
  const verificationCode = document.getElementById('user-create-email-verification').value
  const { lang, setControl, setErrors } = this.props

  setControl({ connecting: true })

  fetch(API_URL + VERIFY_API_ROUTE, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Lang: lang,
    },
    body: JSON.stringify({ verificationToken, verificationCode }),
  })
  .then(response => {
    if (response.status == 200) return response.json()

    throw new Error('SomethingWentWrong')
  })
  .then(json => {
    const { accessToken, href } = json
    const { changeRoute } = this.context

    saveTokens.call(this, accessToken)
    changeRoute({ href })
  })
  .catch(() =>
    setErrors({ verification: { pl: 'Nieprawidłowy kod weryfikacyjny', en: 'Invalid verification code' } })
  )
    // .finally(() => setControl({ connecting: false }))
}

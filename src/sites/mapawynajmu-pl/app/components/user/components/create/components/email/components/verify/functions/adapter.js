import API_URL from '../../../../../../../../../../shared/constants/urls/api'
import { VERIFY_API_ROUTE } from '../constants/api_routes'
import { saveTokens } from '../../../../../../../functions/token-handlers'
import getCookieValue from '../../../../../../../../../../../shared/app/functions/cookies/getters/get-cookie-value'

export function verify() {
  if (!this.verificationManager('validate')) return

  const confirmationToken = getCookieValue('confirmation_token')
  const verificationCode = document.getElementById('user-create-email-verification').value
  const { lang, changeAuthorizeData, changeControl, changeErrors } = this.props

  changeControl({ connecting: true })

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

      console.log(json)

      saveTokens.call(this, accessToken)
      changeAuthorizeData({ authorized: true, name })
      changeRoute({ href })
      changeControl({ connecting: false })
    })
    .catch(() =>
      changeErrors({ verification: { pl: 'Nieprawidłowy kod weryfikacyjny', en: 'Invalid verification code' } })
    )
    .finally(() => changeControl({ connecting: false }))
}

import API_URL from '../../../../../../../../../../shared/constants/urls/api.js'
import { VERIFY_API_ROUTE } from '../constants/api_routes.js'
import { saveTokens } from '../../../../../../../functions/token-handlers'
import getCookieValue from '../../../../../../../../../../../shared/app/functions/cookies/getters/get-cookie-value.js'
import { buildUrl } from '../../../../../../../../../../shared/functions/builders/url'

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
      const { accessToken, name, announcement_path, path } = json
      const { changeRoute } = this.context
      const href = buildUrl({ path: announcement_path || path })

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

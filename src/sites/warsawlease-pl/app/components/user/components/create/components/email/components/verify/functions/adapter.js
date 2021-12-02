import API_URL from '../../../../../../../../../../shared/constants/urls/api.js'
import { VERIFY_API_ROUTE } from '../constants/api_routes.js'
import { saveTokens } from '../../../../../../../functions/token-handlers'
import getCookieValue from '../../../../../../../../../../../shared/app/functions/cookies/getters/get-cookie-value.js'

export function verify() {
  if (!this.verificationManager('validate')) return
  
  const confirmationToken = getCookieValue('confirmation_token')
  const verificationCode = document.getElementById('user-create-email-verification').value
  const { renderAnnouncementCreateVerification, lang, announcementId, changeAuthorizeData, changeControl, changeErrors } = this.props

  changeControl({ connecting: true })

  fetch(API_URL + VERIFY_API_ROUTE, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ confirmationToken, verificationCode })
  })
  .then(response => {
    if (response.status == 200) return response.json()

    throw new Error('SomethingWentWrong')
  })
  .then(json => {
    const { accessToken, name } = json
    
    saveTokens.call(this, accessToken)
    changeAuthorizeData({ authorized: true, name })

    const { changeRoute } = this.context

    if (renderAnnouncementCreateVerification) {
      // TODO CHANGE ROOUTE
      changeRoute({ href })
      changeControl({ connecting: false })
      return
    }

    // TODO CHANGE ROUTE
    changeRoute({ href })
  })
  .catch(() => changeErrors({ verification: { pl: 'Nieprawidłowy kod weryfikacyjny', en: 'Invalid verification code' } }))
  .finally(() => changeControl({ connecting: false }))
}

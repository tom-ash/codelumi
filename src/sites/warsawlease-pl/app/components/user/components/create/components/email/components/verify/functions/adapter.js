import API_URL from '../../../../../../../../../../shared/constants/urls/api.js'
import { VERIFY_API_ROUTE } from '../constants/api_routes.js'
import { saveTokens } from '../../../../../../../functions/token-handlers'
import { ANNOUNCEMENT_CREATE_SUCCESS_TRACK, ANNOUNCEMENT_CREATE_FORM_TRACK } from '../../../../../../../../../../shared/constants/tracks/tracks'
import changeRouteWithHref from '../../../../../../../../../functions/routes/changers/route-with-href.js'

export function verify() {
  if (!this.verificationManager('validate')) return
  
  const email = window.location.search.match(/e=(.*)$/)[1]
  const verificationCode = document.getElementById('user-create-email-verification').value
  const { renderAnnouncementCreateVerification, lang, changeAuthorizeData, changeControl, changeErrors } = this.props

  changeControl({ connecting: true })

  fetch(API_URL + VERIFY_API_ROUTE, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, verificationCode })
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
    const track = renderAnnouncementCreateVerification ? ANNOUNCEMENT_CREATE_SUCCESS_TRACK : ANNOUNCEMENT_CREATE_FORM_TRACK

    changeRouteWithHref({ lang, track, changeRoute })
  })
  .catch(() => changeErrors({ verification: { pl: 'Nieprawidłowy kod weryfikacyjny', en: 'Invalid verification code' } }))
  .finally(() => changeControl({ connecting: false }))
}

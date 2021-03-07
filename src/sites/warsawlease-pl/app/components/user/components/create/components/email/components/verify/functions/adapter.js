import { apiUrl } from '../../../../../../../../../constants/urls.js'
import { saveTokens } from '../../../../../../../functions/token-handlers'
import { ROOT_TRACK, USER_TRACK, USER_CREATE_TRACK } from '../../../../../../../../../../shared/constants/tracks/tracks'
import changeRouteWithHref from '../../../../../../../../../functions/routes/changers/route-with-href.js'

export function verify() {
  if (!this.verificationManager('validate')) return
  
  const verificationCode = document.getElementById('user-create-email-verification').value
  const {
    lang,
    changeAuthorizeData,
    changeControl,
    changeErrors,
    creatingAnnouncement,
    changeAnnouncementCreateControl,
    changeRender
  } = this.props

  changeControl({ connecting: true })

  fetch(apiUrl + '/user_create_with_email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': this.props.token
    },
    body: JSON.stringify({ verificationCode })
  })
  .then(response => {
    if (response.status == 201) {
      return response.json()
    }

    throw new Error('SomethingWentWrong')
  })
  .then(json => {
    const {
      accessToken,
      name
    } = json
    
    saveTokens.call(this, accessToken)
    changeAuthorizeData({
      authorized: true,
      name
    })

    if (creatingAnnouncement) {
      changeAnnouncementCreateControl({ step: 'publishing' })
      changeRender({ [USER_TRACK]: false, [USER_CREATE_TRACK]: false })
      return
    }

    const { changeRoute } = this.context
    const track = ROOT_TRACK

    changeRouteWithHref({ lang, track, changeRoute })
  })
  .catch(() => {
    changeErrors({
      verification: { pl: 'Nieprawidłowy kod weryfikacyjny', en: 'Invalid verification code' }
    })
  })
  .finally(() => {
    changeControl({ connecting: false })
  })
}
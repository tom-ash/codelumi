import { apiUrl } from '../../../../../../../../../constants/urls.js'
import { saveTokens } from '../../../../../../../functions/token-handlers'
import { ROOT_TRACK } from '../../../../../../../../../../shared/constants/tracks/tracks'

export function verify() {
  if (!this.verificationManager('validate')) return
  
  const verificationCode = document.getElementById('user-create-email-verification').value
  const {
    changeAuthorizeData,
    changeControl,
    changeErrors
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
      name,
      phoneVerified: false
    })
    this.changeRoute(ROOT_TRACK)
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
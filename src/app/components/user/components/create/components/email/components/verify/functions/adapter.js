import { apiUrl } from '../../../../../../../../../constants/urls.js'
import { saveTokens } from '../../../../../../../functions/token-handlers'

export function verify() {
  if (!this.verificationManager('validate')) return
  
  const verificationCode = document.getElementById('user-create-email-verification').value
  const { changeApp, changeAuthorizeData, changeControl, changeErrors } = this.props

  changeControl({ connecting: false })

  fetch(apiUrl + '/user_create_with_email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': this.props.token
    },
    body: JSON.stringify({ verificationCode })
  })
  .then(response => {
    if (response.status == 201) return response.json()
    throw new Error('SomethingWentWrong')
  })
  .then(json => {
    const { accessToken, name } = json
    saveTokens.call(this, accessToken)

    changeControl({ connecting: false })
    changeApp({ showUserCreate: false })
    changeAuthorizeData({ authorized: true, name, phoneVerified: false })
  })
  .catch(() => {
    changeErrors({
      verification: { polish: 'nieprawidłowy kod weryfikacyjny', english: 'invalid verification code' }
    })
    changeControl({ connecting: false })
  })
}
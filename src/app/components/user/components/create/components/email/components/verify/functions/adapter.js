import { apiUrl } from '../../../../../../../../../constants/urls.js'
import { saveTokens } from '../../../../../../../functions/token-handlers'

export function verify() {
  if (!this.verificationManager('validate')) return
  this.props.changeControl({ connecting: false })
  const verificationCode = document.getElementById('user-create-email-verification').value

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
    const { changeAuthorizeData, changeControl} = this.props
    const { accessToken, name } = json
    saveTokens.call(this, accessToken)
    changeAuthorizeData({ authorized: true, name, phoneVerified: false })
    changeControl({ connecting: false, success: true })
  })
  .catch(() => {
    this.props.changeErrors({
      verification: { polish: 'nieprawidłowy kod weryfikacyjny', english: 'invalid verification code' }
    })
    this.props.changeControl({ connecting: false })
  })
}
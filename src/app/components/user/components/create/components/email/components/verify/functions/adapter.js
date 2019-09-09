import { apiUrl } from '../../../../../../../../../constants/urls.js'
import { saveTokens } from '../../../../../../../functions/token-handlers'

export function verify() {
  if (!this.verificationManager('validate')) return
  this.props.changeControl({ connecting: false })
  const verificationCode = document.getElementById('user-create-email-verification').value
  fetch(apiUrl + '/user_create_with_email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', searchToken: this.props.token },
    body: JSON.stringify({ verificationCode })
  })
  .then(response => {
    if (response.status == 201) return response.json()
    throw new Error('SomethingWentWrong')
  })
  .then(jsonResponse => {
    const { changeAuthorizeData, changeControl} = this.props
    const { name, phone_verified: phoneVerified } = jsonResponse
    saveTokens.call(this, jsonResponse.UST, jsonResponse.UAT)
    changeAuthorizeData({ authorized: true, name, phoneVerified })
    changeControl({ connecting: false, success: true })
  })
  .catch(() => {
    this.props.changeErrors({
      verification: {
        polish: 'nieprawidłowy kod weryfikacyjny',
        english: 'invalid verification code'
      }
    })
    this.props.changeControl({ connecting: false })
  })
}
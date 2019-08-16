import { apiUrl } from '../../../../../../../../../constants/urls.js'
import { saveTokens } from '../../../../../../../functions/token-handlers'

export function verify() {
  if (!this.verificationManager('validate')) return
  this.props.changeControl({ connecting: false })
  const verificationCode = document.getElementById('user-create-email-verification').value
  fetch(apiUrl + '/user_create_with_email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', searchToken: this.props.token },
    body: JSON.stringify({ verificationCode: verificationCode })
  })
  .then(response => {
    if (response.status == 201) return response.json()
    throw new Error('SomethingWentWrong')
  })
  .then(jsonResponse => {
    saveTokens.call(this, jsonResponse.UST, jsonResponse.UAT)
    this.props.changeUserAuthorized(true)
    this.props.changeData({ name: jsonResponse.name })
    this.props.changeControl({ connecting: false, success: true })
    this.changeRoute(null, 'myAccount')
    location.reload();
  })
  .catch(() => {
    this.props.changeErrors({
      verification: { polish: 'nieprawidłowy kod weryfikacyjny', english: 'invalid verification code' }
    })
    setTimeout(() => this.props.changeCreate({ cConnecting: false }), 1000);
  })
}
import { apiUrl } from '../../../../../../../../../constants/urls.js'
import { getTokens } from '../../../../../../authorize/components/tokens/functions/get-tokens'

export function startVerification() {
  const [UST, UAT] = getTokens()
  fetch(apiUrl + '/phones/verification', {
    headers: { 'Content-Type': 'application/json', UST, UAT }
  })
  .then(response => {
    if (response.status === 200) this.props.changeControl({ phoneVerificationStarted: true })
  })
}

export function sendVerification() {
  this.props.changeControl({ connecting: true })
  const verificationCode = document.getElementById('user-edit-phone-verification-code').value
  const [UST, UAT] = getTokens()
  fetch(apiUrl + '/users/verify_phone', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', UST, UAT },
    body: JSON.stringify({ verificationCode })
  })
  .then(response => {
    if (response.status === 200) this.props.changeAuthorizeData({ phoneVerified: true })
    throw new Error('Verification Invalid')
  })
  .catch(() => {
    this.props.changeErrors({
      phoneVerification: { polish: 'nieprawidłowy kod weryfikacyjny', english: 'invalid verification code' }
    })
  })
  .finally(() => this.props.changeControl({ connecting: false }))
}
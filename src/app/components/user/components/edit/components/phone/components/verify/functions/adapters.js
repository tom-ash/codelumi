import { apiUrl } from '../../../../../../../../../constants/urls.js'
import { getAccessToken } from '../../../../../../authorize/components/tokens/functions/get-tokens'

export function startVerification() {
  const access_token = getAccessToken()
  fetch(apiUrl + '/phones/verification', {
    headers: {
      'Content-Type': 'application/json',
      access_token
    }
  })
  .then(response => {
    if (response.status === 200) this.props.changeControl({ phoneVerificationStarted: true })
  })
}

export function sendVerification() {
  const { changeApp, changeAuthorizeData, changeControl } =  this.props

  changeControl({ connecting: true })
  const verificationCode = document.getElementById('user-edit-phone-verification-code').value
  const access_token = getAccessToken()
  fetch(apiUrl + '/users/verify_phone', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      access_token
    },
    body: JSON.stringify({ verificationCode })
  })
  .then(response => {
    if (response.status === 200) {
      changeAuthorizeData({ phoneVerified: true })
      changeApp({ showUserEditPhoneVerify: false })
      return
    }

    throw new Error('Verification Invalid')
  })
  .catch(() => {
    this.props.changeErrors({
      phoneVerification: { polish: 'nieprawidłowy kod weryfikacyjny', english: 'invalid verification code' }
    })
  })
  .finally(() => changeControl({ connecting: false }))
}
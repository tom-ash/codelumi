import { apiUrl } from '../../../../../constants/urls.js'
import { getAccessToken } from '../../authorize/components/tokens/functions/get-tokens'

export function sendEmail() {
  const { email } = this.props
  if (this.props.connecting) return
  this.props.changeControl({ connecting: true })
  const access_token = getAccessToken()
  fetch(apiUrl + '/user/destroy/email', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      access_token
    },
    body: JSON.stringify({ email })
  })
  .then(response => {
    if (response.status == 200) return this.props.changeControl({ step: 'verification' })
    throw new Error('Server Error')
  })
  .catch((error) => console.dir(error))
  .finally(() => this.props.changeControl({ connecting: false }))
}

export function destroy() {
  if (this.props.connecting) return
  const verificationCode = document.getElementById('user-destroy-verification').value
  if (!this.verificationManager('validate', verificationCode)) return
  this.props.changeControl({ connecting: true })
  const access_token = getAccessToken()
  fetch(apiUrl + '/user/destroy', {
    method: 'DELETE', headers: {
      'Content-Type': 'application/json',
      access_token
    },
    body: JSON.stringify({ verificationCode })
  })
  .then(response => {
    if (response.status == 200) return this.deauthorizeUser()
    this.props.changeErrors({
      verification: { polish: 'nieprawidłowy kod weryfikacyjny', english: 'invalid verification code' }
    })
    throw new Error('SomethingWentWrong')
  })
  .catch((error) => console.dir(error))
  .finally(() => this.props.changeControl({ connecting: false }))
}
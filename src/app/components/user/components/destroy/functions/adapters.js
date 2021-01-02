import { apiUrl } from '../../../../../constants/urls.js'
import { getAccessToken } from '../../authorize/components/tokens/functions/get-tokens'
import { ROOT_TRACK } from '../../../../../../shared/constants/tracks/tracks'

export function sendEmail() {
  const {
    changeControl,
    connecting,
    email,
    language
  } = this.props

  if (connecting) return

  changeControl({ connecting: true })
  
  fetch(apiUrl + '/user/destroy/email', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      access_token: getAccessToken(),
      language
    },
    body: JSON.stringify({ email })
  })
  .then(response => {
    if (response.ok) return changeControl({ step: 'verification' })
    
    throw new Error('Server Error')
  })
  .catch(error => console.dir(error))
  .finally(() => changeControl({ connecting: false }))
}

export function destroy() {
  const {
    changeControl,
    connecting
  } = this.props
  const verificationCode = document.getElementById('user-destroy-verification').value

  if (connecting || !this.verificationManager('validate', verificationCode)) return

  changeControl({ connecting: true })

  fetch(apiUrl + '/user/destroy', {
    headers: {
      'Content-Type': 'application/json',
      access_token: getAccessToken()
    },
    method: 'DELETE', 
    body: JSON.stringify({ verificationCode })
  })
  .then(response => {
    if (response.ok) {
      this.changeRoute(ROOT_TRACK)
      this.deauthorizeUser()
      return
    }

    this.props.changeErrors({
      verification: {
        pl: 'Nieprawidłowy kod weryfikacyjny',
        en: 'Invalid verification code'
      }
    })
    throw new Error('SomethingWentWrong')
  })
  .catch(error => console.dir(error))
  .finally(() => changeControl({ connecting: false }))
}

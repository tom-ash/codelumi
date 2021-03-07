import API_URL from '../../../../../../shared/constants/urls/api.js'
import { getAccessToken } from '../../authorize/components/tokens/functions/get-tokens'
import { ROOT_TRACK } from '../../../../../../shared/constants/tracks/tracks'
import changeRouteWithHref from '../../../../../functions/routes/changers/route-with-href.js'

export function sendEmail() {
  const {
    changeControl,
    connecting,
    email,
    lang
  } = this.props

  if (connecting) return

  changeControl({ connecting: true })
  
  fetch(API_URL + '/user/destroy/email', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      access_token: getAccessToken(),
      lang
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
  const { lang, connecting, changeControl } = this.props
  const verificationCode = document.getElementById('user-destroy-verification').value

  if (connecting || !this.verificationManager('validate', verificationCode)) return

  changeControl({ connecting: true })

  fetch(API_URL + '/user/destroy', {
    headers: {
      'Content-Type': 'application/json',
      access_token: getAccessToken()
    },
    method: 'DELETE', 
    body: JSON.stringify({ verificationCode })
  })
  .then(response => {
    if (response.ok) {
      const { changeRoute } = this.context
      const track = ROOT_TRACK
  
      changeRouteWithHref({ lang, track, changeRoute })
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

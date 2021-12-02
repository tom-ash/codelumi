import API_URL from '../../../../../../shared/constants/urls/api.js'
import getAccessToken from '../../authorize/components/tokens/functions/get-tokens'
import { VERIFY_API_ROUTE_DATA, DELETE_API_ROUTE_DATA } from '../constants/api_route_data.js'

export function sendEmail() {
  const {
    changeControl,
    connecting,
    email,
    lang
  } = this.props

  if (connecting) return

  const { method, route } = VERIFY_API_ROUTE_DATA

  changeControl({ connecting: true })
  
  fetch(API_URL + route, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': getAccessToken(),
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

  const { method, route } = DELETE_API_ROUTE_DATA

  fetch(API_URL + route, {
    method,
    headers: { 'Content-Type': 'application/json', 'Access-Token': getAccessToken() },
    body: JSON.stringify({ verificationCode })
  })
  .then(response => {
    if (response.ok) {
      const { changeRoute } = this.context
  
      // TODO CHANGE ROUTE
      changeRoute({ href })
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

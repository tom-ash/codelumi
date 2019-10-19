import { apiUrl } from '../../../../../../../constants/urls.js'
import { getUserToken } from './get-tokens'
import { deleteCookie } from '../../../../../../../functions/cookie-handlers'

export function authorizeUserWithTokens() {
  const uT = getUserToken()
  if (!uT) return

  fetch(apiUrl + '/authorize_with_token', {
    headers: {
      'Content-Type': 'application/json',
      uT
    }
  })
  .then(response => {
    if (response.status == 200) return response.json()
    throw new Error('InvalidTokens')
  })
  .then(json => {
    this.props.changeUserAuthorizeData({
      authorized: true,
      name: json.name,
      phoneVerified: json.phoneVerified
    })
  })
  .catch(e => {
    deleteCookie('uT')
  })
}
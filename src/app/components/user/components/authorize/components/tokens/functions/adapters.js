import { apiUrl } from '../../../../../../../constants/urls.js'
import { getUserToken } from './get-tokens'
import { deleteCookie } from '../../../../../../../functions/cookie-handlers'

export function authorizeUserWithTokens() {
  const UT = getUserToken()
  if (!UT) return

  fetch(apiUrl + '/authorize_with_token', {
    headers: {
      'Content-Type': 'application/json',
      UT
    }
  })
  .then(response => {
    if (response.status == 200) return response.json()
    throw new Error('InvalidTokens')
  })
  .then(jsonRes => {
    this.props.changeUserAuthorizeData({
      authorized: true,
      name: jsonRes.name,
      phoneVerified: jsonRes.phone_verified
    })
  })
  .catch(e => {
    deleteCookie('UT')
  })
}
import { apiUrl } from '../../../../../../../constants/urls.js'
import { getAccessToken } from './get-tokens'
import { deleteCookie } from '../../../../../../../functions/cookie-handlers'

export function authorizeUserWithTokens() {
  const access_token = getAccessToken()
  if (!access_token) return

  fetch(apiUrl + '/authorize_with_token', {
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': access_token
    }
  })
  .then(response => {
    if (response.status == 200) return response.json()
    throw new Error('InvalidTokens')
  })
  .then(json => {
    this.props.changeUserAuthorizeData({
      accountType: json.accountType,
      authorized: true,
      name: json.name,
      phoneVerified: json.phoneVerified,
      admin: json.admin
    })
  })
  .catch(() => deleteCookie('access_token'))
}
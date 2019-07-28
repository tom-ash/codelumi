import { apiUrl } from '../../../../../../../constants/urls.js'
import { getTokens } from './get-tokens'

export function authorizeUserWithTokens() {
  const [ UST, UAT ] = getTokens()
  fetch(apiUrl + '/authorize_with_tokens', {
    headers: { 'Content-Type': 'application/json', UST, UAT }
  })
  .then(response => {
    if (response.status == 200) return response.json()
    throw new Error('InvalidCredentials')
  })
  .then(jsonRes => {
    this.props.changeUserAuthorizeData({ authorized: true, name: jsonRes.name, phoneVerified: jsonRes.phone_verified})
  })
}
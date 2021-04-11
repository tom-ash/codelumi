import { getCookieValue } from '../../../../../../../functions/cookie-handlers'

function getAccessToken() {
  return getCookieValue('access_token')
}

export default getAccessToken

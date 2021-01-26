import { getCookieValue } from '../../../../../../../functions/cookie-handlers'

export function getAccessToken() {
  return getCookieValue('access_token')
}
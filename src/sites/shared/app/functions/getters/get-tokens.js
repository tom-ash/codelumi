import { getCookieValue } from './get-cookie-value.js'

export function getAccessToken() {
  return getCookieValue('access_token')
}
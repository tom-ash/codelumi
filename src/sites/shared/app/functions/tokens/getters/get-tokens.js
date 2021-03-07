import getCookieValue from '../../cookies/getters/get-cookie-value.js'

export function getAccessToken() {
  return getCookieValue('access_token')
}
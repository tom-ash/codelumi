import { getCookieValue } from '../../../../../functions/cookie-handlers'

export const getAccessToken = () => {
  return getCookieValue('access_token')
}

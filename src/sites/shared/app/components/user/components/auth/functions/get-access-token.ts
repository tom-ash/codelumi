import { getCookieValue } from '../../../../../../../mapawynajmu-pl/app/functions/cookie-handlers'

export const getAccessToken = () => {
  return getCookieValue('access_token')
}

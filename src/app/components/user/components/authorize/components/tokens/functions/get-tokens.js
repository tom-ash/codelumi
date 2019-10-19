import { getCookieValue } from '../../../../../../../functions/cookie-handlers'

export function getUserToken() {
  return getCookieValue('uT')
}
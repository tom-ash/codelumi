import { getCookieValue } from '../../../../../../../functions/cookie-handlers'

export function getTokens() {
  return [getCookieValue('UST'), getCookieValue('UAT')]
}
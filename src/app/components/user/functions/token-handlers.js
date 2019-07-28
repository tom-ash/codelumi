import { saveCookie } from '../../../functions/cookie-handlers'

export function saveTokens(UST, UAT) {
  const expiration = this.props.rememberMe ? 'ninetyDays' : null
  saveCookie('UST', UST, expiration)
  saveCookie('UAT', UAT, expiration)
}
import { saveCookie } from '../../../functions/cookie-handlers'

export function saveTokens(UT) {
  const expiration = this.props.rememberMe ? 'ninetyDays' : null
  saveCookie('UT', UT, expiration)
}
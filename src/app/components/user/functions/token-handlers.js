import { saveCookie } from '../../../functions/cookie-handlers'

export function saveTokens(uT) {
  const expiration = this.props.rememberMe ? 'ninetyDays' : null
  saveCookie('uT', uT, expiration)
}
import { saveCookie } from '../../../functions/cookie-handlers'

export function saveTokens(access_token) {
  const expiration = this.props.rememberMe ? 'ninetyDays' : null
  saveCookie('access_token', access_token, expiration)
}

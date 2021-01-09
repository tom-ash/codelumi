import { getBooleanCookieValue } from '../shared/functions/getters/get-boolean-cookie-value'

export function getVisitorState(cookies) {
  const {
    _pdpsm,
    _pdpaf
  } = cookies
  const marketingConsent = getBooleanCookieValue(_pdpsm)
  const statisticsConsent = getBooleanCookieValue(_pdpaf)

  return {
    visitor: {
      legal: {
        privacy: {
          settings: {
            marketingConsent,
            statisticsConsent
          }
        }
      }
    }
  }
}
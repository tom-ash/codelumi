import { getCookieAsBool } from './cookie-as-bool'

export function getVisitorState(cookies) {
  const {
    _pdpsm,
    _pdpaf
  } = cookies
  const marketingConsent = getCookieAsBool(_pdpsm)
  const statisticsConsent = getCookieAsBool(_pdpaf)

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

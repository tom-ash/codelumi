import getCookieAsBool from './cookie-as-bool'

function getVisitorState(cookies) {
  const { _pdpsm, _pdpaf } = cookies
  const statisticsConsent = getCookieAsBool(_pdpaf)
  const marketingConsent = getCookieAsBool(_pdpsm)

  return { visitor: { statisticsConsent, marketingConsent } }
}

export default getVisitorState

import { getCookieValue } from '../components/legal/components/cookies/functions/get'

export function componentDidMount() {
  setCookies.call(this)
}

function setCookies() {
  const { changeSettings } = this.props

  changeSettings({
    statisticsConsent: getBoolCookieValue(getCookieValue('_pdpaf')),
    marketingConsent: getBoolCookieValue(getCookieValue('_pdpsm')),
  })
}

function getBoolCookieValue(cookieValue) {
  switch(cookieValue) {
    case 'true': return true
    case 'false': return false
    default: return null
  }
}

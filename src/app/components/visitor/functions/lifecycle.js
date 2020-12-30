import { getCookieValue } from '../components/legal/components/cookies/functions/get'

export function componentDidMount() {
  setCookies.call(this)
}

function setCookies() {
  const {
    statisticsConsent,
    marketingConsent,
    changeSettings
  } = this.props

  const consents = {
    ...statisticsConsent === null && { statisticsConsent: getBooleanCookieValue(getCookieValue('_pdpaf')) },
    ...marketingConsent === null && { marketingConsent: getBooleanCookieValue(getCookieValue('_pdpsm')) }
  }

  changeSettings(consents)
}

function getBooleanCookieValue(cookieValue) {
  switch(cookieValue) {
    case 'true': return true
    case 'false': return false
    default: return null
  }
}

import { getCookieValue } from '../components/legal/components/cookies/functions/get'

export function componentDidMount() {
  setCookies.call(this)
}

function setCookies() {
  const { changeSettings } = this.props

  changeSettings({
    additionalFunctionsConsent: getCookieValue('_pdpaf'),
    statisticsAndMarketingConsent: getCookieValue('_pdpsm')
  })
}
import { getCookieValue } from '../components/legal/components/cookies/functions/get'

export function componentDidMount() {
  setCookies.call(this)
}

function setCookies() {
  const consents = { ...this.props.consents }
  consents.personalDataProcessing.additionalFunctions = getCookieValue('_pdpaf')
  consents.personalDataProcessing.statisticsAndMarketing = getCookieValue('_pdpsm')
  this.props.changeSettings({ consents: consents })
}
import { getCookieValue } from '../components/legal/components/cookies/functions/get'
import { VISITOR_PRIVACY_MONIT_TRACK } from '../../../../shared/constants/tracks/tracks'
import { anyTrue } from '../../../../shared/functions/helpers/any-true'
import { anyNull } from '../../../../shared/functions/helpers/any-null'

export function componentDidMount() {
  setCookies.call(this)
}

export function componentDidUpdate() {
  const {
    renderPrivacySettings,
    renderTermsOfService,
    renderCookiesPolicy,
    renderPrivacyPolicy,
    statisticsConsent,
    marketingConsent,
    changeRender
  } = this.props

  if (anyTrue({
    renderPrivacySettings,
    renderTermsOfService,
    renderCookiesPolicy,
    renderPrivacyPolicy
  })) return
  
  if (anyNull({
    statisticsConsent,
    marketingConsent
  })) {
    changeRender({ [VISITOR_PRIVACY_MONIT_TRACK]: true })
  }
}

function setCookies() {
  const {
    renderPrivacySettings,
    renderTermsOfService,
    renderCookiesPolicy,
    renderPrivacyPolicy,
    statisticsConsent,
    marketingConsent,
    changeSettings,
    changeRender
  } = this.props
  
  if (anyNull({
    statisticsConsent,
    marketingConsent
  })) {
    const statisticsConsentCookieValue = getBooleanCookieValue(getCookieValue('_pdpaf'))
    const marketingConsentCookieValue = getBooleanCookieValue(getCookieValue('_pdpsm'))
    const consents = {
      ...statisticsConsent === null && { statisticsConsent: statisticsConsentCookieValue },
      ...marketingConsent === null && { marketingConsent: marketingConsentCookieValue }
    }

    changeSettings(consents)

    if (anyTrue({
      renderPrivacySettings,
      renderTermsOfService,
      renderCookiesPolicy,
      renderPrivacyPolicy
    })) return

    if (anyNull({
      statisticsConsentCookieValue,
      marketingConsentCookieValue
    })) {
      changeRender({ [VISITOR_PRIVACY_MONIT_TRACK]: true })
    }
  }
}

function getBooleanCookieValue(cookieValue) {
  switch(cookieValue) {
    case 'true': return true
    case 'false': return false
    default: return null
  }
}

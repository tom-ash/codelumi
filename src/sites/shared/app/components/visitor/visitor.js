import React from 'react'
import { connect } from 'react-redux'
import loadable from '@loadable/component'
const VisitorPrivacyMonit = loadable(() => import('./components/legal/components/privacy/components/monit/monit'))
const VisitorContact = loadable(() => import('./components/contact/contact'))
const VisitorTermsOfService = loadable(() => import('./components/legal/components/terms-of-service/terms-of-service'))
const VisitorCookiesPolicy = loadable(() => import('./components/legal/components/cookies/components/policy/policy'))
const VisitorPrivacyPolicy = loadable(() => import('./components/legal/components/privacy/components/policy/policy'))
const VisitorPrivacySettings = loadable(() =>
  import('./components/legal/components/privacy/components/settings/settings')
)
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import anyNull from '../../../../shared/app/functions/helpers/any-null'

class Visitor extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      appName,
      lang,
      links,
      langHandler,
      changeConsents,
      buildUrl,
      renderContact,
      renderPrivacySettings,
      renderTermsOfService,
      renderCookiesPolicy,
      renderPrivacyPolicy,
      statisticsConsent,
      marketingConsent,
    } = this.props
    const contactProps = { links, appName, buildUrl, langHandler }
    const termsOfServiceProps = { links, appName, buildUrl, langHandler }
    const cookiesPolicyProps = { links, appName, buildUrl, langHandler }
    const privacyPolicyProps = { links, appName, buildUrl, langHandler }
    const privacySettingsProps = {
      links,
      appName,
      statisticsConsent,
      marketingConsent,
      buildUrl,
      changeConsents,
      langHandler,
    }
    const privacyMonitProps = { links, appName, lang, buildUrl, langHandler, changeConsents }
    const showPrivacyMonit =
      anyNull({ statisticsConsent, marketingConsent }) &&
      !renderContact &&
      !renderTermsOfService &&
      !renderCookiesPolicy &&
      !renderPrivacyPolicy &&
      !renderPrivacySettings

    return (
      <div id='visitor'>
        {showPrivacyMonit && <VisitorPrivacyMonit {...privacyMonitProps} />}
        {renderContact && <VisitorContact {...contactProps} />}
        {renderTermsOfService && <VisitorTermsOfService {...termsOfServiceProps} />}
        {renderCookiesPolicy && <VisitorCookiesPolicy {...cookiesPolicyProps} />}
        {renderPrivacyPolicy && <VisitorPrivacyPolicy {...privacyPolicyProps} />}
        {renderPrivacySettings && <VisitorPrivacySettings {...privacySettingsProps} />}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Visitor)

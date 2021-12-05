import React from 'react'
import { connect } from 'react-redux'
import loadable from '@loadable/component'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
const VisitorPrivacyMonit = loadable(() => import('./components/legal/components/privacy/components/monit/monit'))
const VisitorContact = loadable(() => import('./components/contact/contact'))
const VisitorTermsOfService = loadable(() => import('./components/legal/components/terms-of-service/terms-of-service'))
const VisitorCookiesPolicy = loadable(() => import('./components/legal/components/cookies/components/policy/policy'))
const VisitorPrivacyPolicy = loadable(() => import('./components/legal/components/privacy/components/policy/policy'))
const VisitorPrivacySettings = loadable(() => import('./components/legal/components/privacy/components/settings/settings'))

class Visitor extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const {
      appName, lang, links,
      renderContact, renderPrivacyMonit, renderPrivacySettings, renderTermsOfService, renderCookiesPolicy, renderPrivacyPolicy,
      statisticsConsent, marketingConsent,
      changeRoute, langHandler, changeConsents
    } = this.props
    const contactProps = { links, appName, changeRoute, langHandler }
    const termsOfServiceProps = { links, appName, changeRoute, langHandler }
    const cookiesPolicyProps = { links, appName, changeRoute, langHandler }
    const privacyPolicyProps = { links, appName, changeRoute, langHandler }
    const privacySettingsProps = { links, appName, statisticsConsent, marketingConsent, changeRoute, changeConsents, langHandler }
    const privacyMonitProps = { links, appName, lang, changeRoute, langHandler, changeConsents }

    return (
      <div id='visitor'>
        {renderContact && <VisitorContact {...contactProps} />}
        {renderTermsOfService && <VisitorTermsOfService {...termsOfServiceProps} />}
        {renderCookiesPolicy && <VisitorCookiesPolicy {...cookiesPolicyProps} />}
        {renderPrivacyPolicy && <VisitorPrivacyPolicy {...privacyPolicyProps} />}
        {renderPrivacySettings && <VisitorPrivacySettings {...privacySettingsProps} />}
        {renderPrivacyMonit && <VisitorPrivacyMonit {...privacyMonitProps} />}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Visitor)

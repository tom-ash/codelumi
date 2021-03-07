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
      renderContact,
      renderPrivacyMonit,
      renderPrivacySettings,
      renderTermsOfService,
      renderCookiesPolicy,
      renderPrivacyPolicy,
      changeRoute,
      langHandler
    } = this.props

    const contactProps = { changeRoute, langHandler }
    const termsOfServiceProps = { changeRoute, langHandler }
    const cookiesPolicyProps = { changeRoute, langHandler }
    const privacyPolicyProps = { changeRoute, langHandler }
    const privacySettingsProps = { changeRoute, langHandler }
    const privacyMonitProps = { changeRoute, langHandler }

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

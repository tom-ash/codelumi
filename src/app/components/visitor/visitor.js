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
import { componentDidMount } from './functions/lifecycle'

class Visitor extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = componentDidMount
  }
  
  render() {
    const {
      renderContact,
      renderTermsOfService,
      renderCookiesPolicy,
      renderPrivacyPolicy,
      renderPrivacySettings,
      renderPrivacyMonit
    } = this.props

    console.log(renderCookiesPolicy)

    return (
      <div id='visitor'>
        {renderContact && <VisitorContact />}
        {renderTermsOfService && <VisitorTermsOfService/>}
        {renderCookiesPolicy && <VisitorCookiesPolicy />}
        {renderPrivacyPolicy && <VisitorPrivacyPolicy/>}
        {renderPrivacySettings && <VisitorPrivacySettings/>}
        {renderPrivacyMonit && <VisitorPrivacyMonit />}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Visitor)

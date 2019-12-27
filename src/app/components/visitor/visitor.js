import React, { lazy, Suspense } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { componentDidMount } from './functions/lifecycle'
import { checkConsents } from './functions/check-consents'
import VisitorPrivacyMonit from './components/legal/components/privacy/components/monit/monit'
const VisitorAbout = lazy(() => import('./components/about/about'))
const VisitorContact = lazy(() => import('./components/contact/contact'))
const VisitorTermsOfService = lazy(() => import('./components/legal/components/terms-of-service/terms-of-service'))
const VisitorCookiesPolicy = lazy(() => import('./components/legal/components/cookies/components/policy/policy'))
const VisitorPrivacyPolicy = lazy(() => import('./components/legal/components/privacy/components/policy/policy'))
const VisitorPrivacySettings = lazy(() => import('./components/legal/components/privacy/components/settings/settings'))
import './styles/styles.scss'

class User extends React.Component {
  constructor(props) {
    super(props)
    this.checkConsents = checkConsents.bind(this)
    this.componentDidMount = componentDidMount
  }

  show = () => {
    const { showAbout, showContact, showTermsOfService, showPrivacyMonit, showPrivacyPolicy, showCookiesPolicy,
            showPrivacySettings } = this.props

    return showAbout || showContact || showTermsOfService || showPrivacyMonit || showPrivacyPolicy ||
           showCookiesPolicy || showPrivacySettings
  }

  hide = () => {
    const { changeApp, showTermsOfService, showPrivacyPolicy, showCreate } = this.props

    if ((showTermsOfService || showPrivacyPolicy) && showCreate) {
      return changeApp({ showVisitorTermsOfService: false, showVisitorPrivacyPolicy: false })
    }

    changeApp({
      showUserCreate: false,
      showUserAuthorize: false,
      showVisitorAbout: false,
      showVisitorContact: false,
      showVisitorTermsOfService: false,
      showVisitorCookiesPolicy: false,
      showVisitorPrivacyPolicy: false,
      showVisitorPrivacySettings: false
    })
  }
  
  render() {
    const { showAbout, showContact, showTermsOfService, showPrivacyPolicy, showCookiesPolicy,
            showPrivacySettings, additionalFunctionsConsent, statisticsAndMarketingConsent } = this.props

    return (
      <div id='visitor'>
        {!this.show() && (additionalFunctionsConsent === null || statisticsAndMarketingConsent === null) && !showPrivacySettings &&
        <VisitorPrivacyMonit />}
        {this.show() &&
        <div className='darkened-cover' onClick={() => this.hide()}>
          <Suspense fallback={null}>
            {showAbout           && <VisitorAbout />}
            {showContact         && <VisitorContact />}
            {showTermsOfService  && <VisitorTermsOfService/>}
            {showCookiesPolicy   && <VisitorCookiesPolicy />}
            {showPrivacyPolicy   && <VisitorPrivacyPolicy/>}
            {showPrivacySettings && <VisitorPrivacySettings/>}
          </Suspense>
        </div>}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)

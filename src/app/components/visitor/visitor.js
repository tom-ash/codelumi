import React from 'react'
import { connect } from 'react-redux'
import loadable from '@loadable/component'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
const VisitorPrivacyMonit = loadable(() => import('./components/legal/components/privacy/components/monit/monit'))
const VisitorAbout = loadable(() => import('./components/about/about'))
const VisitorContact = loadable(() => import('./components/contact/contact'))
const VisitorTermsOfService = loadable(() => import('./components/legal/components/terms-of-service/terms-of-service'))
const VisitorCookiesPolicy = loadable(() => import('./components/legal/components/cookies/components/policy/policy'))
const VisitorPrivacyPolicy = loadable(() => import('./components/legal/components/privacy/components/policy/policy'))
const VisitorPrivacySettings = loadable(() => import('./components/legal/components/privacy/components/settings/settings'))
import { componentDidMount } from './functions/lifecycle'

class User extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = componentDidMount
  }

  show = () => {
    const {
      showAbout,
      showContact,
      showTermsOfService,
      showPrivacyMonit,
      showPrivacyPolicy,
      showCookiesPolicy,
      showPrivacySettings
    } = this.props

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
    const {
      showAbout,
      showContact,
      showTermsOfService,
      showPrivacyPolicy,
      showCookiesPolicy,
      showPrivacySettings,
      statisticsConsent,
      marketingConsent
    } = this.props

    return (
      <div id='visitor'>
        {!this.show() && (statisticsConsent === null || marketingConsent === null) && !showPrivacySettings &&
        <VisitorPrivacyMonit />}
        {this.show() &&
        <div>
          {showAbout           && <VisitorAbout />}
          {showContact         && <VisitorContact />}
          {showTermsOfService  && <VisitorTermsOfService/>}
          {showCookiesPolicy   && <VisitorCookiesPolicy />}
          {showPrivacyPolicy   && <VisitorPrivacyPolicy/>}
          {showPrivacySettings && <VisitorPrivacySettings/>}
        </div>}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)

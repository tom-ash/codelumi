import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { componentDidMount } from './functions/lifecycle'
import { checkConsents } from './functions/check-consents'
import VisitorPrivacyMonit from './components/legal/components/privacy/components/monit/monit'
import VisitorAbout from './components/about/about'
import VisitorContact from './components/contact/contact'
import VisitorTermsOfService from './components/legal/components/terms-of-service/terms-of-service'
import VisitorCookiesPolicy from './components/legal/components/cookies/components/policy/policy'
import VisitorPrivacyPolicy from './components/legal/components/privacy/components/policy/policy'
import VisitorPrivacySettings from './components/legal/components/privacy/components/settings/settings'

import VisitorWelcome from './components/welcome/welcome'

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
        <VisitorWelcome appContainer={this.props.appContainer}/>
        {this.show() &&
        <div className='darkened-cover' onClick={() => this.hide()}>
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

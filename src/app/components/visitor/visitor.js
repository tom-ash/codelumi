import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { componentDidMount } from './functions/lifecycle'
import { checkRoute } from '../../functions/routers'
import { checkConsents } from './functions/check-consents'
import VisitorAbout from './components/about/about'
import VisitorContact from './components/contact/contact'
import VisitorTermsOfService from './components/legal/components/terms-of-service/terms-of-service'
import VisitorCookiesPolicy from './components/legal/components/cookies/components/policy/policy'
import VisitorPrivacyPolicy from './components/legal/components/privacy/components/policy/policy'
import VisitorPrivacyMonit from './components/legal/components/privacy/components/monit/monit'
import VisitorPrivacySettings from './components/legal/components/privacy/components/settings/settings'

class User extends React.Component {
  constructor(props) {
    super(props)
    this.checkRoute = checkRoute.bind(this)
    this.checkConsents = checkConsents.bind(this)
    this.componentDidMount = componentDidMount
  }
  
  render() {
    return (
      <div id='visitor'>
        {
        this.checkConsents() && this.checkRoute('privacyMonit') &&
        <VisitorPrivacyMonit />
        }
        {
        this.checkRoute('about') &&
        <VisitorAbout />
        }
        {
        this.checkRoute('contact') &&
        <VisitorContact />
        }
        {
        this.checkRoute('visitorTermsOfService') &&
        <VisitorTermsOfService/>
        }
        {
        this.checkRoute('cookiesPolicy') &&
        <VisitorCookiesPolicy />
        }
        {
        this.checkRoute('privacyPolicy') &&
        <VisitorPrivacyPolicy/>
        }
        {
        this.checkRoute('privacySettings') &&
        <VisitorPrivacySettings/>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)

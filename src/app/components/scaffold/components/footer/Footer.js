import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { changeRoute } from '../../../../functions/routers'
import * as managers from './functions/managers'
import { ManagedButton } from 'managed-inputs'
import { languageHandler } from '../../../../functions/language-handler'
import './styles/styles.scss'

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.changeRoute = changeRoute.bind(this)
    this.languageHandler = languageHandler.bind(this)
    this.aboutManger = managers.aboutManager.bind(this)
    this.contactManager = managers.contactManager.bind(this)
    this.termsOfServiceManager = managers.termsOfServiceManager.bind(this)
    this.cookiesPolicyManager = managers.cookiesPolicyManager.bind(this)
    this.privacyPolicyManager = managers.privacyPolicyManager.bind(this)
    this.privacySettingsManager = managers.privacySettingsManager.bind(this)
  }
  render() {
    return(
      <div id='footer'>
        <div className='inner'>
          <div className='links'>
            <div className='column'>
              <ManagedButton {...this.aboutManger()} />
              <ManagedButton {...this.contactManager()} />
              <ManagedButton {...this.termsOfServiceManager()} />
            </div>
            <div className='column'>
              <ManagedButton {...this.cookiesPolicyManager()} />
              <ManagedButton {...this.privacyPolicyManager()} />
              <ManagedButton {...this.privacySettingsManager()} />
            </div>
            <div className='float-clear' />
          </div>
          <div className='copyright'>
            <i className='far fa-copyright' /> warsawlease.pl 2019
          </div>
          <div className='float-clear' />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { changePath } from '../../../../functions/routers/change-path'
import * as managers from './functions/managers'
import { ManagedLink } from 'managed-inputs'
import { languageHandler, languageObjectHandler } from '../../../../functions/language-handler'

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.changePath = changePath.bind(this)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.contactManager = managers.contactManager.bind(this)
    this.termsOfServiceManager = managers.termsOfServiceManager.bind(this)
    this.cookiesPolicyManager = managers.cookiesPolicyManager.bind(this)
    this.privacyPolicyManager = managers.privacyPolicyManager.bind(this)
    this.privacySettingsManager = managers.privacySettingsManager.bind(this)
    this.changePath = changePath.bind(this)
  }
  render() {
    return(
      <div id='footer'>
        <div className='inner'>
          <div className='links'>
              <ManagedLink {...this.contactManager()} />
              <ManagedLink {...this.termsOfServiceManager()} />
              <ManagedLink {...this.cookiesPolicyManager()} />
              <ManagedLink {...this.privacyPolicyManager()} />
              <ManagedLink {...this.privacySettingsManager()} />
          </div>
          <div className='copyright'>
            <i className='far fa-copyright' /> Warsaw Digital Sp. z o.o. 2020 {this.languageObjectHandler({ pl: 'Wszelkie prawa zastrzeżone.', en: 'All rights reserved.' })}
          </div>
          <div className='float-clear' />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
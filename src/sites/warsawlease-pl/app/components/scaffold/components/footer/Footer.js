import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import * as managers from './functions/managers'
import { ManagedLink } from 'managed-inputs'
import { langObjHandler } from '../../../../functions/lang-handler'

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langObjHandler.bind(this)
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
            <ManagedLink {...this.contactManager()} />
            <ManagedLink {...this.termsOfServiceManager()} />
            <ManagedLink {...this.cookiesPolicyManager()} />
            <ManagedLink {...this.privacyPolicyManager()} />
            <ManagedLink {...this.privacySettingsManager()} />
          </div>
          <div className='copyright'>
            Warsaw Digital Sp. z o.o. 2020 {this.langHandler({ pl: 'Wszelkie prawa zastrzeżone.', en: 'All rights reserved.' })}
          </div>
          <div className='float-clear' />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
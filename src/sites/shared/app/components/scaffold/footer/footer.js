import React from 'react'
import { contactManager, termsOfServiceManager, cookiesPolicyManager, privacySettingsManager, privacyPolicyManager, addPageManager } from './functions/managers'
import { ManagedLink } from 'managed-inputs'

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { isAdmin, langHandler } = this.props

    return(
      <div id='footer'>
        <div className='inner'>
          <div className='links'>
            <ManagedLink {...contactManager(this.props)} />
            <ManagedLink {...termsOfServiceManager(this.props)} />
            <ManagedLink {...cookiesPolicyManager(this.props)} />
            <ManagedLink {...privacyPolicyManager(this.props)} />
            <ManagedLink {...privacySettingsManager(this.props)} />
            {isAdmin && <ManagedLink {...addPageManager(this.props)} />}
          </div>
          <div className='copyright'>
            Warsaw Digital Sp. z o.o. 2020 {langHandler({ pl: 'Wszelkie prawa zastrzeżone.', en: 'All rights reserved.' })}
          </div>
          <div className='float-clear' />
        </div>
      </div>
    )
  }
}

export default Footer
import React from 'react'
import managers from './functions/managers'
import { ManagedLink } from 'managed-inputs'

const Footer = props => {
    const { isAdmin, langHandler } = props
    const { contactManager, termsOfServiceManager, cookiesPolicyManager, privacySettingsManager, privacyPolicyManager, addPageManager } = managers

    return(
      <div id='footer'>
        <div className='inner'>
          <div className='links'>
            <ManagedLink {...contactManager(props)} />
            <ManagedLink {...termsOfServiceManager(props)} />
            <ManagedLink {...cookiesPolicyManager(props)} />
            <ManagedLink {...privacyPolicyManager(props)} />
            <ManagedLink {...privacySettingsManager(props)} />
            {isAdmin && <ManagedLink {...addPageManager(props)} />}
          </div>
          <div className='copyright'>
            Warsaw Digital Sp. z o.o. 2020 {langHandler({ pl: 'Wszelkie prawa zastrzeżone.', en: 'All rights reserved.' })}
          </div>
          <div className='float-clear' />
        </div>
      </div>
    )
}

export default Footer
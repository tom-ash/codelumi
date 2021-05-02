import React from 'react'
import managers from './functions/managers'
import { ManagedLink } from 'managed-inputs'
import useStyles from 'isomorphic-style-loader/useStyles'

const Footer = props => {
  const { isAdmin, langHandler, styles } = props
  const { contactManager, termsOfServiceManager, cookiesPolicyManager, privacySettingsManager, privacyPolicyManager, addPageManager } = managers

  useStyles(styles)

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
          <div className='float-clear' />
        </div>
        <div className='copyright'>
          Warsaw Digital Sp. z o.o. 2021 {langHandler({ pl: 'Wszelkie prawa zastrzeżone.', en: 'All rights reserved.' })}
        </div>
        
      </div>
    </div>
  )
}

export default Footer
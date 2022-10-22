import React from 'react'
import managers from './functions/managers'
import { ManagedLink } from 'managed-inputs'
import useStyles from 'isomorphic-style-loader/useStyles'

const Footer = props => {
  const { appName, isAdmin, langHandler } = props
  const {
    contactManager,
    termsOfServiceManager,
    cookiesPolicyManager,
    privacySettingsManager,
    privacyPolicyManager,
    addPageManager,
  } = managers
  const styles = require(`../../../../../${appName}/app/components/scaffold/footer/styles/styles.scss`)

  useStyles(styles)

  return (
    <footer id='footer'>
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
          Warsaw Digital Sp. z o.o. 2021{' '}
          {langHandler({ pl: 'Wszelkie prawa zastrzeżone.', en: 'All rights reserved.' })}
        </div>
      </div>
    </footer>
  )
}

export default Footer

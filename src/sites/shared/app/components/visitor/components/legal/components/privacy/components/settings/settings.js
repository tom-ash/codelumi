import React from 'react'
import { ManagedRadio } from 'managed-inputs'
import { statisticsConsentManager, marketingConsentManager } from './functions/managers'
import { textsProvider } from './functions/texts-provider'
import useStyles from 'isomorphic-style-loader/useStyles'

const VisitorPrivacySettings = props => {
  const { appName, langHandler } = props
  const styles = require(`../../../../../../../../../../${appName}/app/components/visitor/styles/styles.scss`)

  useStyles(styles)

  return (
    <div className='legal-document'>
      <h1 className='page-header'>
        {langHandler({ pl: 'Ustawienia prywatności', en: 'Privacy Settings' })}
      </h1>
      <div className='consent'>
        {langHandler(textsProvider('statistics', props))}
        <ManagedRadio {...statisticsConsentManager(props)} />
      </div>
      <div className='consent'>
        {langHandler(textsProvider('marketing', props))}
        <ManagedRadio {...marketingConsentManager(props)} />
      </div>
    </div>
  )
}

export default VisitorPrivacySettings

import React from 'react'
import { ManagedButton } from 'managed-inputs'
import { agreeManager, settingsManager } from './functions/manager'
import { textsProvider } from './functions/texts-provider'
import useStyles from 'isomorphic-style-loader/useStyles'

const VisitorPrivacyMonit = props => {
  const { appName, langHandler } = props

  const styles = require(`../../../../../../../../../../${appName}/app/components/visitor/components/privacy-monit/styles/styles.scss`)

  useStyles(styles)

  return (
    <div id='privacy-monit-cover' className='cover'>
      <div id='privacy-monit'>
        {langHandler(textsProvider('cookies', props))}
        {langHandler(textsProvider('dataProcessing', props))}
        <div className='buttons'>
          <ManagedButton {...settingsManager(props)} />
          <ManagedButton {...agreeManager(props)} />
          <div className='float-clear' />
        </div>
      </div>
    </div>
  )
}

export default VisitorPrivacyMonit

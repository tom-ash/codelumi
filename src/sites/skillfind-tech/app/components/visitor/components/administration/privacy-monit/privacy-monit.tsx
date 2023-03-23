import React from 'react'
import { Cookies } from './components/cookies/cookies'
import { DataProcessing } from './components/data-processing/data-processing'
import { PrivacySettingsLink } from './components/privacy-settings/privacy-settings.link'
import { AcceptButton } from './components/accept/accept'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

const VisitorPrivacyMonit = () => {
  useStyles(styles)

  return (
    <div
      id='privacy-monit-cover'
      className='cover'
    >
      <div id='privacy-monit'>
        <Cookies />
        <DataProcessing />
        <div className='buttons'>
          <PrivacySettingsLink />
          <AcceptButton />
          <div className='float-clear' />
        </div>
      </div>
    </div>
  )
}

export default VisitorPrivacyMonit

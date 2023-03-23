import React from 'react'
import { useStore } from '../../../../../../../shared/app/functions/store/useStore'
import { Heading } from '../../../../../../../mapawynajmu-pl/app/components/support/components/heading'
import { StatisticsConsentRadio } from './components/statistics-consent/statistics-consent.radio'
import { MarketingConsentRadio } from './components/marketing-consent/marketing-consent.radio'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

const PrivacySettings = () => {
  useStyles(styles)

  const { state } = useStore()
  const { texts } = state
  const {
    headingOne,
    statisticsConsent,
    marketingConsent,
  } = texts
  const headingOneProps = {
    tier: 1,
    text: headingOne,
  }

  return (
    <div id='privacy-settings'>
      <Heading {...headingOneProps} />
      <div className='consent-container'>
        <div className='consent-text'>
          {statisticsConsent}
        </div>
        <StatisticsConsentRadio />
      </div>
      <div className='consent-container'>
        <div className='consent-text'>
          {marketingConsent}
        </div>
        <MarketingConsentRadio />
      </div>
    </div>
  )
}

export default PrivacySettings

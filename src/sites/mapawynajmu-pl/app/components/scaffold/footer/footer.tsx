import React from 'react'
import { useStore } from '../../../../../shared/app/functions/store/useStore'
import { ContactLink } from './components/contact/contact.link'
import { TermsOfServiceLink } from './components/terms-of-service/terms-of-service.link'
import { CookiesPolicyLink } from './components/cookies-policy/cookies-policy.link'
import { PrivacyPolicyLink } from './components/privacy-policy/privacy-policy.link'
import { PrivacySettingsLink } from './components/privacy-settings/privacy-settings.link'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

const Footer = () => {
  useStyles(styles)

  const { state } = useStore()
  const { texts } = state
  const { allRightsReserved } = texts

  return (
    <footer id='footer'>
      <div className='inner'>
        <div className='links'>
          <ContactLink />
          <TermsOfServiceLink />
          <CookiesPolicyLink />
          <PrivacyPolicyLink />
          <PrivacySettingsLink />
          <div className='float-clear' />
        </div>
        <div className='copyright'>
          <span className='warsaw-digital'>Warsaw Digital Sp. z o.o. 2020 - 2023</span>
          <span className='all-rights-reserved'>{allRightsReserved}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer

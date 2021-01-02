import React from 'react'
import {
  VISITOR_TERMS_OF_SERVICE_TRACK,
  VISITOR_PRIVACY_POLICY_TRACK
} from '../../../../../../../../shared/constants/tracks/tracks'

export function textProvider({ pureText }) {
  if (pureText) {
    return {
      termsAndPrivacyConsent: this.languageObjectHandler({
        pl: 'Akceptuję Regulamin i Politykę Prywatności.',
        en: 'I accept the Terms and Conditions and the Privacy Policy.'
      })
    }
  }

  const changeRouteToTermsOfService = e => {
    e.stopPropagation()
    this.changeRoute(VISITOR_TERMS_OF_SERVICE_TRACK)
  }

  const changeRouteToPrivacyPolicy = e => {
    e.stopPropagation()
    this.changeRoute(VISITOR_PRIVACY_POLICY_TRACK)
  }

  return (
    {
      termsAndPrivacyConsent: this.languageObjectHandler({
        pl: <span>Akceptuję <u className='link' onClick={changeRouteToTermsOfService}>Regulamin</u> i&nbsp;<u className='link' onClick={changeRouteToPrivacyPolicy}>Politykę Prywatności</u>.</span>,
        en: <span>I accept the <u className='link' onClick={changeRouteToTermsOfService}>Terms and Conditions</u> and the <u className='link' onClick={changeRouteToPrivacyPolicy}>Privacy Policy</u>.</span>
      })
    }
  )
}

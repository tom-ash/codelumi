import React from 'react'
import { VISITOR_TERMS_OF_SERVICE_TRACK, VISITOR_PRIVACY_POLICY_TRACK } from '../../../../../../../../shared/constants/tracks/tracks'
import changeRouteWithHref from '../../../../../../../functions/routes/changers/route-with-href.js'

export function textProvider({ pureText }) {
  if (pureText) {
    return {
      termsAndPrivacyConsent: this.langHandler({
        pl: 'Akceptuję Regulamin i Politykę Prywatności.',
        en: 'I accept the Terms and Conditions and the Privacy Policy.'
      })
    }
  }

  const { changeRoute } = this.context
  const { lang } = this.props

  const changeRouteToTermsOfService = e => {
    const track = VISITOR_TERMS_OF_SERVICE_TRACK

    changeRouteWithHref({ track, lang, changeRoute })
  }

  const changeRouteToPrivacyPolicy = e => {
    const track = VISITOR_PRIVACY_POLICY_TRACK

    changeRouteWithHref({ track, lang, changeRoute })
  }

  return (
    {
      termsAndPrivacyConsent: this.langHandler({
        pl: <span>Akceptuję <u className='link' onClick={changeRouteToTermsOfService}>Regulamin</u> i&nbsp;<u className='link' onClick={changeRouteToPrivacyPolicy}>Politykę Prywatności</u>.</span>,
        en: <span>I accept the <u className='link' onClick={changeRouteToTermsOfService}>Terms and Conditions</u> and the <u className='link' onClick={changeRouteToPrivacyPolicy}>Privacy Policy</u>.</span>
      })
    }
  )
}

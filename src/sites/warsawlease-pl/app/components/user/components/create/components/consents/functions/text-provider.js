import React from 'react'
import { VISITOR_TERMS_OF_SERVICE_TRACK, VISITOR_PRIVACY_POLICY_TRACK } from '../../../../../../../../shared/constants/tracks/tracks'
import getHrefByTrackAndLang from '../../../../../../../functions/routes/getters/href-by-track-and-lang.js'

export function textProvider({ pureText }) {
  if (pureText) {
    return {
      termsAndPrivacyConsent: this.langHandler({
        pl: 'Akceptuję Regulamin i Politykę Prywatności.',
        en: 'I accept the Terms and Conditions and the Privacy Policy.'
      })
    }
  }

  const { lang } = this.props
  const termsAndServiceHref = getHrefByTrackAndLang({ track: VISITOR_TERMS_OF_SERVICE_TRACK, lang })
  const privacyPolicyHref = getHrefByTrackAndLang({ track: VISITOR_PRIVACY_POLICY_TRACK, lang })

  return (
    {
      termsAndPrivacyConsent: (
        <span>
          {this.langHandler({ pl: 'Akceptuję', en: 'I accept' })}&nbsp;
          <a
            className='link'
            href={termsAndServiceHref}
            target='_blank'
            onClick={e => e.stopPropagation()}
          >
          {this.langHandler({ pl: 'Regulamin', en: 'the Terms of Service' })}
        </a>
        &nbsp;{this.langHandler({ pl: 'i', en: 'and' })}&nbsp;
        <a
          className='link'
          href={privacyPolicyHref}
          target='_blank'
          onClick={e => e.stopPropagation()}
        >
          {this.langHandler({ pl: 'Politykę Prywatności', en: 'the Privacy Policy' })}
        </a>
        .
      </span>
      )
    }
  )
}

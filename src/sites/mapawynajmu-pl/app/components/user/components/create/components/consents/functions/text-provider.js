import React from 'react'
import buildUrl from '../../../../../../../../shared/functions/builders/url'

export function textProvider({ pureText }) {
  if (pureText) {
    return {
      termsAndPrivacyConsent: this.langHandler({
        pl: 'Akceptuję Regulamin i Politykę Prywatności.',
        en: 'I accept the Terms and Conditions and the Privacy Policy.',
      }),
    }
  }

  const { links } = this.props
  const termsOfServiceLinkData = links['visitor/terms-of-service']
  const privacyPolicyLinkData = links['visitor/privacy-policy']
  const termsAndServiceHref = buildUrl({ path: termsOfServiceLinkData && termsOfServiceLinkData.path })
  const privacyPolicyHref = buildUrl({ path: privacyPolicyLinkData && privacyPolicyLinkData.path })

  return {
    termsAndPrivacyConsent: (
      <span>
        {this.langHandler({ pl: 'Akceptuję', en: 'I accept' })}&nbsp;
        <a
          className='link'
          href={termsAndServiceHref}
          target='_blank'
          onMouseOver={e => e.stopPropagation()}
          onClick={e => e.stopPropagation()}
        >
          {this.langHandler({ pl: 'Regulamin', en: 'the Terms of Service' })}
        </a>
        &nbsp;{this.langHandler({ pl: 'i', en: 'and' })}&nbsp;
        <a
          className='link'
          href={privacyPolicyHref}
          target='_blank'
          onMouseOver={e => e.stopPropagation()}
          onClick={e => e.stopPropagation()}
        >
          {this.langHandler({ pl: 'Politykę Prywatności', en: 'the Privacy Policy' })}
        </a>
        .
      </span>
    ),
  }
}

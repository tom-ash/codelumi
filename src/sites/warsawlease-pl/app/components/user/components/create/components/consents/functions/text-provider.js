import React from 'react'

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

  // TODO CHANGE ROUTE
  const termsAndServiceHref = 'TODO'
  const privacyPolicyHref = 'TODO'

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

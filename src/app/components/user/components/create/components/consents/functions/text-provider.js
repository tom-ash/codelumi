import React from 'react'

export function textProvider({ pureText }) {
  const { changeApp } = this.props

  if (pureText) {
    return {
      termsAndPrivacyConsent: this.languageObjectHandler({
        pl: 'Akceptuję Regulamin i Politykę Prywatności.',
        en: 'I accept the Terms and Conditions and the Privacy Policy.'
      })
    }
  }

  const showTerms = e => {
    e.stopPropagation()
    changeApp({ showVisitorTermsOfService: true })
  }

  const showPrivacyPolicy = e => {
    e.stopPropagation()
    changeApp({ showVisitorPrivacyPolicy: true })
  }

  return (
    {
      termsAndPrivacyConsent: this.languageObjectHandler({
        pl: <span>Akceptuję <u className='link' onClick={showTerms}>Regulamin</u> i&nbsp;<u className='link' onClick={showPrivacyPolicy}>Politykę Prywatności</u>.</span>,
        en: <span>I accept the <u className='link' onClick={showTerms}>Terms and Conditions</u> and the <u className='link' onClick={showPrivacyPolicy}>Privacy Policy</u>.</span>
      })
    }
  )
}

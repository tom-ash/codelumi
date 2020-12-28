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

  const TODO = e => {
    e.stopPropagation()
    TODO
  }

  const TODO = e => {
    e.stopPropagation()
    TODO
  }

  return (
    {
      termsAndPrivacyConsent: this.languageObjectHandler({
        pl: <span>Akceptuję <u className='link' onClick={TODO}>Regulamin</u> i&nbsp;<u className='link' onClick={TODO}>Politykę Prywatności</u>.</span>,
        en: <span>I accept the <u className='link' onClick={TODO}>Terms and Conditions</u> and the <u className='link' onClick={TODO}>Privacy Policy</u>.</span>
      })
    }
  )
}

import { Dispatch } from 'redux'

const TERMS_AND_SERVICE_CONSENT_ERROR = {
  pl: 'Akceptacja Regulaminu i Polityki Prywatności jest wymagana.',
  en: 'Acceptance of the Terms and Conditions and the Privacy Policy is required.',
}

interface TermsAndServiceConsentValidator {
  (props: { termsAndPrivacyConsent: boolean; dispatch: Dispatch }): boolean
}

export const termsAndServiceConsentValidator: TermsAndServiceConsentValidator = props => {
  const { termsAndPrivacyConsent, dispatch } = props

  if (!termsAndPrivacyConsent) {
    dispatch({ type: 'user/create/errors', value: { termsAndPrivacyConsent: TERMS_AND_SERVICE_CONSENT_ERROR } })
    return false
  }

  return true
}

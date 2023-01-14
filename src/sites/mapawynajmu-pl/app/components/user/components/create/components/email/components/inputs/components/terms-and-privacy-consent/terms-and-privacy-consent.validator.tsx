import { Dispatch } from 'redux'
import { EMPTY_LANG_OBJECT } from '../../../../../../../../../../constants/lang-objects/empty'

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

  dispatch({ type: 'user/create/errors', value: { termsAndPrivacyConsent: EMPTY_LANG_OBJECT } })
  return true
}

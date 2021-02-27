import { errors } from '../constants/errors'

export function errorTextProvider() {
  if (this.props.termsError) return this.langHandler(errors.termsAndPrivacyConsent)
}
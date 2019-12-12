import { errors } from '../constants/errors'

export function errorTextProvider() {
  if (this.props.termsError) return this.languageObjectHandler(errors.termsAndPrivacyConsent)
}
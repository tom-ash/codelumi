import { errors } from '../constants/errors'

export function errorTextProvider() {
  if (this.props.privacyError && this.props.termsError) {
    return this.languageObjectHandler(errors.termsAndPrivacy)
  } else if (this.props.privacyError) {
    return this.languageObjectHandler(errors.privacy)
  } else if (this.props.termsError) {
    return this.languageObjectHandler(errors.terms)
  }
}
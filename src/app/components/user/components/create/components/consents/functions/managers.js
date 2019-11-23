import { consents } from '../constants/consents.js'

export function termsOfServiceManager() {
  return {
    id: 'user-create-consents-terms',
    classNames: { container: 'form-input checkbox' },
    checked: this.props.terms,
    label: this.languageObjectHandler(consents.terms),
    onClick: (value) => {
      this.props.changeInputs({ terms: value })
      this.termsOfServiceManager().validate(value)
    },
    validate: (value) => this.termsValidator(value)
  }
}

export function privacyPolicyManager() {
  return {
    id: 'user-create-consents-privacy',
    classNames: { container: 'form-input checkbox' },
    checked: this.props.privacy,
    label: this.languageObjectHandler(consents.privacy),
    onClick: (value) => {
      this.props.changeInputs({ privacy: value })
      this.privacyPolicyManager().validate(value)
    },
    validate: (value) => this.privacyValidator(value)
  }
}

import { managerAgent } from 'managed-inputs'
import { consents } from '../constants/consents.js'

export function termsOfServiceManager(aspect, value) {
  return managerAgent(aspect, {
    id: 'user-create-consents-terms',
    classNames: { container: 'form-input checkbox' },
    checked: this.props.terms,
    label: this.languageObjectHandler(consents.terms),
    onClick: () => {
      this.props.changeInputs({ terms: value })
      this.termsOfServiceManager('validate', value)
    },
    validate: () => this.termsValidator(value)
  })
}

export function privacyPolicyManager(aspect, value) {
  return managerAgent(aspect, {
    id: 'user-create-consents-privacy',
    classNames: { container: 'form-input checkbox' },
    checked: this.props.privacy,
    label: this.languageObjectHandler(consents.privacy),
    onClick: () => {
      this.props.changeInputs({ privacy: value })
      this.privacyPolicyManager('validate', value)
    },
    validate: () => this.privacyValidator(value)
  })
}

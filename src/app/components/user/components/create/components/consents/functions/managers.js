export function termsAndPrivacyConsentManager() {
  return {
    id: 'user-create-consents-terms-and-privacy',
    classNames: { container: 'form-input checkbox' },
    checked: this.props.termsAndPrivacyConsent,
    label: this.textProvider({}).termsAndPrivacyConsent,
    onClick: value => {
      this.props.changeInputs({ termsAndPrivacyConsent: value })
      this.termsAndPrivacyConsentManager().validate(value)
    },
    validate: value => this.termsAndPrivacyConsentValidator(value)
  }
}

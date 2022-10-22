function termsAndPrivacyConsentValidator(value) {
  this.props.changeErrors({ termsAndPrivacyConsent: !value })
  return value
}

export default termsAndPrivacyConsentValidator

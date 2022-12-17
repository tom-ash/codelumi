function termsAndPrivacyConsentValidator(value) {
  const { dispatch } = this.props

  dispatch({ type: 'user/create/errors', value: { termsAndPrivacyConsent: !value } })

  return value
}

export default termsAndPrivacyConsentValidator

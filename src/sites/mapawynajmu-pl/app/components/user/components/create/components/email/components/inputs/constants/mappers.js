export const mapStateToProps = store => {
  const { app, links, inputs, errors } = store
  const { lang } = app
  const { accountType, businessName, emailAddress, password, countryCode, phoneNumber, termsAndPrivacyConsent } = inputs
  const {
    accountType: accountTypeError,
    businessName: businessNameError,
    emailAddress: emailAddressError,
    password: passwordError,
    phoneNumber: phoneNumberError,
    termsAndPrivacyConsent: termsAndPrivacyConsentError,
  } = errors

  return {
    accountType,
    businessName,
    emailAddress,
    password,
    countryCode,
    phoneNumber,
    accountTypeError,
    businessNameError,
    emailAddressError,
    passwordError,
    phoneNumberError,
    termsAndPrivacyConsent,
    termsAndPrivacyConsentError,
    lang,
    links,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    setInputs: value => dispatch({ type: 'inputs', value }),
    dispatch,
  }
}

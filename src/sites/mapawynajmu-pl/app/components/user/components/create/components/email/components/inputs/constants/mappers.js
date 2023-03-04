export const mapStateToProps = store => {
  const { app, links, inputs, errors } = store
  const { lang } = app
  const { accountType, businessName, emailAddress, password, countryCode, phoneNumber, termsOfServiceConsent } = inputs
  const {
    accountType: accountTypeError,
    businessName: businessNameError,
    emailAddress: emailAddressError,
    password: passwordError,
    phoneNumber: phoneNumberError,
    termsOfServiceConsent: termsOfServiceConsentError,
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
    termsOfServiceConsent,
    termsOfServiceConsentError,
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

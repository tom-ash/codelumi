export const mapStateToProps = store => {
  const { links } = store
  const { lang } = store.app
  const { accountType, businessName, emailAddress, password, countryCode, phoneNumber, termsAndPrivacyConsent } = store.user.create.inputs

  const {
    accountType: accountTypeError,
    businessName: businessNameError,
    emailAddress: emailAddressError,
    password: passwordError,
    phoneNumber: phoneNumberError,
    termsAndPrivacyConsent: termsAndPrivacyConsentError
  } = store.user.create.errors

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
    changeInputs: value => dispatch({ type: 'user/create/inputs', value }),
    dispatch,
  }
}

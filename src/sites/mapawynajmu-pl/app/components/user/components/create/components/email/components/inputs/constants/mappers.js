export const mapStateToProps = store => {
  const { lang } = store.app
  const { accountType, businessName, emailAddress, password, countryCode, phoneNumber } = store.user.create.inputs

  const {
    accountType: accountTypeError,
    businessName: businessNameError,
    emailAddress: emailAddressError,
    password: passwordError,
    phoneNumber: phoneNumberError,
  } = store.user.create.errors

  return {
    lang,
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
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    changeInputs: value => dispatch({ type: 'user/create/inputs', value }),
    dispatch,
  }
}

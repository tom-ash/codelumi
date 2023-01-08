export const mapStateToProps = store => {
  const { lang } = store.app
  const { accountType, businessName, emailAddress, password, countryCode } = store.user.create.inputs

  const {
    accountType: accountTypeError,
    businessName: businessNameError,
    emailAddress: emailAddressError,
    password: passwordError,
    phone: phoneError,
  } = store.user.create.errors

  return {
    lang,
    accountType,
    businessName,
    emailAddress,
    password,
    countryCode,
    accountTypeError,
    businessNameError,
    emailAddressError,
    passwordError,
    phoneError,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    changeControl: value => dispatch({ type: 'user/create/control', value }),
    changeInputs: value => dispatch({ type: 'user/create/inputs', value }),
    dispatch,
  }
}

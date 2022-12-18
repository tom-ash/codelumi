export const mapStateToProps = store => {
  const { lang } = store.app
  const { accountType, businessName, email, countryCode } = store.user.create.inputs

  const {
    accountType: accountTypeError,
    businessName: businessNameError,
    phone: phoneError,
    email: emailError,
    password: passwordError,
  } = store.user.create.errors

  return {
    lang,
    accountType,
    email,
    businessName,
    countryCode,
    accountTypeError,
    businessNameError,
    phoneError,
    emailError,
    passwordError,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    changeControl: value => dispatch({ type: 'user/create/control', value }),
    changeInputs: value => dispatch({ type: 'user/create/inputs', value }),
    dispatch,
  }
}

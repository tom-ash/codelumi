export const mapStateToProps = store => {
  const { lang } = store.app
  const { accountType, email, countryCode } = store.user.create.inputs

  const {
    accountType: accountTypeError,
    firstName: firstNameError,
    lastName: lastNameError,
    businessName: businessNameError,
    taxNumber: taxNumberError,
    phone: phoneError,
    email: emailError,
    password: passwordError
  } = store.user.create.errors
  
  return {
    lang: store.app.lang,
    accountType,
    email,
    countryCode,
    accountTypeError,
    firstNameError,
    lastNameError,
    businessNameError,
    taxNumberError,
    phoneError,
    emailError,
    passwordError
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    changeControl: value => dispatch({ type: 'user/create/control', value }),
    changeInputs: value => dispatch({ type: 'user/create/inputs', value }),
    dispatch
  }
}
  